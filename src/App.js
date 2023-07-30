import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DetailSurah from "./pages/DetailSurah";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detailsurah/:nomor" element={<DetailSurah />} />
      </Routes>
    </Router>
  );
}

export default App;
