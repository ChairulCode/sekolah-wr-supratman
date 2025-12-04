import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/homescreen";
import Facility from "./pages/facility";
import Pgtk from "./pages/pages_details/pg-tk";
import ScrollToTop from "./scrolltotop";
import Songs from "./pages/songs";
import Sd from "./pages/pages_details/sd";
import Sma from "./pages/pages_details/sma";
import Smp from "./pages/pages_details/smp";
import Pendaftaran from "./pages/pendaftaran";
import Ekstrakurikuler from "./pages/ekstrakulikuler";
import Carousel_detail_home from "./pages/pages_details/carousel_detail_home";
import PrestasiDetail from "./pages/pages_details/prestasi_detail";
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        {/* khusus route sementara */}
        <Route path="//tingkatan/PG-TK" element={<Pgtk />}></Route>
        <Route path="//tingkatan/SD" element={<Sd />}></Route>
        <Route path="//tingkatan/SMP" element={<Smp />}></Route>
        <Route path="//tingkatan/SMA" element={<Sma />}></Route>
        <Route path="/Fasilitas" element={<Facility />}></Route>
        <Route path="/Lagu-Mars" element={<Songs />}></Route>
        <Route path="/ekstrakurikuler" element={<Ekstrakurikuler />}></Route>
        <Route path="/pendaftaran-siswa" element={<Pendaftaran />}></Route>
        <Route
          path="/carousel-detail/:id"
          element={<Carousel_detail_home />}
        ></Route>
        <Route path="/prestasi/:id" element={<PrestasiDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
