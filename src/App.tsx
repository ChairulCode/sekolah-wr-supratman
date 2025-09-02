import Navbar from "./screens/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path=""></Route>
        <Route path="/tentang kami"></Route>
      </Routes>
    </Router>
  );
}

export default App;
