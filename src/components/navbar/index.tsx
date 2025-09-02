import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../../assets/logo.svg";
import { navTabs } from "../../data";
import { FaTimes } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import gsap from "gsap";
import "./navbar.css";
interface NavTab {
  id: string;
  name: string;
  type: "scroll" | "link" | "route";
  scrollTo?: string;
}
const Navbar: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const handleScroll = () => {
    const currentScrollPosition = window.scrollY;
    setVisible(currentScrollPosition > 145);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (visible) {
      gsap.fromTo(".navbar", { y: -250 }, { y: 0, top: 0 });
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [visible]);

  const handleNavigate = (tab: NavTab) => {
    setOpen(false);
    if (isHome && tab.type === "scroll") return;
    if (tab.type === "scroll") {
      navigate(`/?scrollTo=${tab.id}`);
    } else {
      navigate(tab.id);
    }
  };

  return (
    <nav className={`navbar ${visible ? "visible" : ""}`}>
      {open && (
        <div className="sidebar_overlay" onClick={() => setOpen(false)}></div>
      )}
      <img src={Logo} alt="" className="!w-20 !h-auto" />
      <div className={`box nav_tabs ${open ? "open" : ""}`}>
        <div
          className="icon_container cancel_btn"
          onClick={() => setOpen(false)}
        >
          <FaTimes />
        </div>

        {navTabs.map((tab: NavTab, index: number) => {
          if (isHome && tab.type === "scroll") {
            return (
              <ScrollLink
                key={index}
                to={tab.id}
                className="tab"
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-70}
                onClick={() => setOpen(false)}
              >
                <p>{tab.name}</p>
              </ScrollLink>
            );
          } else if (tab.type === "link") {
            return (
              <ScrollLink
                key={index}
                to={tab.id}
                className="tab"
                onClick={() => {
                  localStorage.setItem("scrollTo", tab.scrollTo || "");
                  setOpen(false);
                }}
              >
                <p>{tab.name}</p>
              </ScrollLink>
            );
          } else {
            return (
              <RouterLink
                key={index}
                to={tab.id}
                className="tab"
                onClick={() => {
                  localStorage.setItem("scrollTo", tab.id);
                  setOpen(false);
                }}
              >
                <p>{tab.name}</p>
              </RouterLink>
            );
          }
        })}
      </div>

      <div className="box buttons">
        <ScrollLink
          to="/contact-detail"
          className="btn contact_btn"
          smooth={true}
          spy={true}
          offset={-70}
        >
          Kontak kami
        </ScrollLink>
        <div className="icon_container menu_btn" onClick={() => setOpen(!open)}>
          <RiMenu3Fill />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
