import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/homescreen";
import About from "./pages/about";
import Songs from "./pages/songs";
import Facility from "./pages/facility";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/Tingkatan" element={<About />}></Route>
        <Route path="/Fasilitas" element={<Facility />}></Route>
        <Route path="/Lagu-mars" element={<Songs />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
