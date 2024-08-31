import React, { useEffect } from "react";
import "../styles/home.scss";
import { BackgroundPatterns, HomeBackground } from "../resource";
import { IoArrowForwardCircle } from "react-icons/io5";
import OfferBanner from "../components/offerBanner";
import HomeAbout_us from "../components/home-about_us";
import OurProducts from "../components/OurProducts";
import Customers from "../components/customers";
import OfferForYou from "../components/offerforyou";
import HpEcoTriendly from "../components/hpEcoTrindly";
import HpElement1 from "../components/HpElement-1";
import HpNews from "../components/HpNews";
import { useNavigate } from "react-router-dom";

const Home = () => {
  
  const top0 = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  useEffect(() => {
    top0();
  }, []);
  const navigate = useNavigate()
  return (
    <>
      <div className="bgc">
        <div className="HomePage containCenter">
          <div className="bimage">
            <img src={HomeBackground} alt="hz" />
            <img src={BackgroundPatterns} alt="hz" />
          </div>
          <div className="explore">
            <p>100% Natural Food</p>
            <p className="h2">Choose the best healthier way of life</p>
            <button onClick={()=>navigate("/news")}>
              Explore Now{" "}
              <span>
                <IoArrowForwardCircle />
              </span>
            </button>
          </div>
        </div>
      </div>
      <OfferBanner />
      <div className="bgc F9F8F8">
        <HomeAbout_us />
      </div>

      <OurProducts />
      <div className="bgc FCFCFC">
        <Customers />
      </div>
      <div className="bgc a274C5B">
        <OfferForYou />
      </div>
      <HpEcoTriendly />
      <HpElement1 />
      <HpNews />
    </>
  );
};

export default Home;
