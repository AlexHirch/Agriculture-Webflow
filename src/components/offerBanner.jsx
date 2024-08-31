import React from "react";
import "../styles/home.scss"
import { PhotoBack, PhotoBack1 } from "../resource";
import { useNavigate } from "react-router-dom";

const OfferBanner = () => {
  const navigate = useNavigate()
  return (
    <div className="OfferBanner containCenter">
      <div onClick={()=>navigate("/shop")} className="offer">
        <img src={PhotoBack} alt="" />
        <p>Natural!!</p>
        <p className="h2">Get Garden Fresh Fruits</p>
      </div>
      <div onClick={()=>navigate("/shop")} className="offer">
        <img src={PhotoBack1} alt="" />
        <p>Offer!!</p>
        <p className="h2">Get 10% off on Vegetables</p>
      </div>
    </div>
  );
};

export default OfferBanner;
