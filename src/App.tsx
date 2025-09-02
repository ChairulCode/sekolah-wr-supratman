import Header from "./components/header";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <Header />
      <Routes>
        <Route path=""></Route>
        <Route path="/tentang kami"></Route>
      </Routes>
    </Router>
  );
}

export default App;
