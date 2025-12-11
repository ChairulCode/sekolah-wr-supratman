import { createContext, useContext, useState, useEffect } from "react";
import { getRequest, postRequest } from "./api-call";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";

moment.locale("id");

interface UserInfo {
  id: number;
  name: string;
  email: string;
}

interface WebContentItem {
  component_key: string;
  value: string;
}

interface AppContextType {
  fetchWebContenData: () => Promise<void>;
  getWebContentValue: (key: string, defaultValue?: string) => string;
  login: (formData: {
    email: string;
    password: string;
  }) => Promise<UserInfo | null>;
  logout: () => Promise<void>;
  checkingSession: () => Promise<void>;

  userLoginInfo: UserInfo | null;
  isUserLoggedIn: boolean;
  isAdmin: boolean;
  isLoading: boolean;
  openSidebar: boolean;

  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  setIsUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setuserLoginInfo: React.Dispatch<React.SetStateAction<UserInfo | null>>;
  setisAdmin: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setwebContents: React.Dispatch<React.SetStateAction<WebContentItem[]>>;
}

const Context_for_App = createContext<AppContextType | null>(null);

export const useAppContext = () => {
  const context = useContext(Context_for_App);

  if (context === null) {
    // Ini akan melempar Error jika hook dipanggil di luar Provider
    throw new Error(
      "useAppContext harus digunakan di dalam AppContextProvider"
    );
  }

  return context;
};

export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userLoginInfo, setuserLoginInfo] = useState<UserInfo | null>(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isAdmin, setisAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [webContents, setwebContents] = useState<WebContentItem[]>([]);
  const [openSidebar, setOpenSidebar] = useState(true);

  const fetchWebContenData = async () => {
    const resData = await getRequest("/konten-web/all");
    setwebContents(resData);
  };

  const getWebContentValue = (
    key: string,
    defaultValue = "fetching from server..."
  ) => {
    return (
      webContents.find((item) => item.component_key === key)?.value ||
      defaultValue
    );
  };

  const login = async (formData: { email: string; password: string }) => {
    try {
      const userRes = await postRequest(`/auth/login`, {
        email: formData.email,
        password: formData.password,
      });

      localStorage.setItem("authToken", userRes.data.token.apiKey);
      const userInfo = userRes.data.userInfo;
      setuserLoginInfo(userInfo);
      setIsUserLoggedIn(true);
      await checkingSession();
      return userInfo;
    } catch (error) {
      console.error("Login failed", error);
      return null;
    }
  };

  const logout = async () => {
    try {
      localStorage.removeItem("authToken");
      setIsUserLoggedIn(false);
      setisAdmin(false);
      toast.success("Berhasil logout", { theme: "colored" });
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  const checkingSession = async () => {
    try {
      const authRes = await getRequest("/auth/auth-status");
      const token = localStorage.getItem("authToken");

      if (!token) {
        throw new Error("No token found");
      }

      const decodedToken = jwtDecode(token);
      const { exp } = decodedToken || {};

      const now = Math.floor(Date.now() / 1000);

      if (exp && exp < now) {
        console.warn("Token has expired!");
        logout();
      }

      setIsUserLoggedIn(authRes.loggedIn);
      setuserLoginInfo(authRes.user_info);
    } catch (error) {
      console.error("Session check failed", error);

      setIsUserLoggedIn(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log("fetching Web Content");
    fetchWebContenData();
    console.log("checking Session");
    checkingSession();
  }, []);

  const contextValue: AppContextType = {
    fetchWebContenData,
    getWebContentValue,
    login,
    logout,
    checkingSession,

    userLoginInfo,
    isUserLoggedIn,
    isAdmin,
    isLoading,
    openSidebar,

    setOpenSidebar,
    setIsUserLoggedIn,
    setuserLoginInfo,
    setisAdmin,
    setIsLoading,
    setwebContents,
  };

  return (
    <Context_for_App.Provider
      value={contextValue} // Menggunakan objek yang sudah divalidasi tipenya
    >
      {children}
      <ToastContainer />
    </Context_for_App.Provider>
  );
};
