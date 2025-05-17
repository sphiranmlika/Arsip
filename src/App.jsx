import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './global.css';

import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import HomePage from "./pages/HomePage";
import TentangPage from "./pages/TentangPage";
import LhePage from "./pages/LhePage";
import PengetahuanPage from "./pages/PengetahuanPage";
import InforIndiPage from "./pages/InforIndiPage";

function App() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tentang" element={<TentangPage />} />
        <Route path="/lhe" element={<LhePage />} />
        <Route path="/pengetahuan" element={<PengetahuanPage />} />
        <Route path="/lapor" element={<InforIndiPage />} />
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;
