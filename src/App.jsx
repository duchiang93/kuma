import { Route, Routes } from "react-router-dom";

import AsideMenu from "./components/AsideMenu/AsideMenu";
import HomeSwiper from "./components/HomeSwiper/HomeSwiper";
import Theme from "./pages/Theme/Theme";
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";

import data from "./assets/Data/Data";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="main-container">
      <div className="aside">
        <AsideMenu />
      </div>
      <div className="content">
        <Routes>
          <Route index path={"/"} element={<HomeSwiper />} />
          <Route path={"/theme"} element={<Theme />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path="/portfolio/:productId" element={<Portfolio />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
