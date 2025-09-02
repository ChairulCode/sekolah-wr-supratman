import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/homescreen";
import About from "./pages/about";
import Registration from "./pages/registration";
import Activity from "./pages/activity";
import Achievements from "./pages/performance";
import Songs from "./pages/songs";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/tentang-kami" element={<About />}></Route>
        <Route
          path="/pendaftaran-siswa-baru"
          element={<Registration />}
        ></Route>
        <Route path="/kegiatan" element={<Activity />}></Route>
        <Route path="/prestasi" element={<Achievements />}></Route>
        <Route path="/lagu-mars" element={<Songs />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
