import React, { useState } from "react";
import "./App.css";
import "./styles/main.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, Navbar } from "./index-components";
import Footer from "./components/footer";
import About from "./path/about";
import Shop from "./path/shop";
import OurTeam from "./path/ourTeam";
import PageNotFound from "./path/page-not-found";
import ShopSingle from "./path/shop-single";
import ServisePage from "./path/servisePage";
import PagesLinks from "./path/pagesLinks";
import QualityStandart from "./path/qualityStandart";
import PortfolioStandart from "./path/portfolio-standart";
import PorfolioInfo from "./path/porfolio-info";
import News from "./path/news";
import NewsSingleBlog from "./path/news-single-blog";
import ContactUs from "./path/contact";
import Password from "./path/password";
import LicensePage from "./path/license";

const App = () => {
  const [cart1, setCart1] = useState(0)
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar cart1={cart1} setCart1={setCart1} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/pages" element={<PagesLinks />} />
          <Route path="/pages/our-team" element={<OurTeam />} />
          <Route path="/shop/product" element={<ShopSingle cart1={cart1} setCart1={setCart1} />} />
          <Route path="/pages/servise-page" element={<ServisePage />} />
          <Route path="/pages/password" element={<Password />} />
          <Route path="/pages/quality-standart" element={<QualityStandart />} />
          <Route path="/projects" element={<PortfolioStandart />} />
          <Route path="/projects/black-raspberry" element={<PorfolioInfo />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/blog" element={<NewsSingleBlog />} />
          <Route path="/pages/contact-us" element={<ContactUs />} />
          <Route path="/license" element={<LicensePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
