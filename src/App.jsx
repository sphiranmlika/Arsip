import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
// import FooterComponent from "./components/FooterComponent";

import HomePage from "./pages/HomePage";
import TentangPage from "./pages/TentangPage";
import LhePage from "./pages/LhePage";
import PengetahuanPage from "./pages/PengetahuanPage";
import LaporPage from "./pages/LaporPage";

function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tentang" element={<TentangPage />} />
        <Route path="/lhe" element={<LhePage />} />
        <Route path="/pengetahuan" element={<PengetahuanPage />} />
        <Route path="/lapor" element={<LaporPage />} />
      </Routes>

      {/* <FooterComponent /> */}
    </div>
  );
}

export default App;
