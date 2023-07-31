import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DetailSurah from "./pages/DetailSurah";
import About from "./component/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detailsurah/:nomor" element={<DetailSurah />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
