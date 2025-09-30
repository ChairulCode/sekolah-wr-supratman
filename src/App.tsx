import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/homescreen";
import Songs from "./pages/songs";
import Facility from "./pages/facility";
import Pgtk from "./pages/pages_details/pg-tk";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="//tingkatan/PG-TK" element={<Pgtk />}></Route>
        <Route path="/Fasilitas" element={<Facility />}></Route>
        <Route path="/Lagu-mars" element={<Songs />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
