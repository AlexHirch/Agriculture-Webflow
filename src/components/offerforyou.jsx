import React from "react";
import { IoArrowForwardCircle } from "react-icons/io5";
import RateStar from "./Rate";
import { Product1 } from "../resource";
import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import CardShop from "./mini-components/card";

const OfferForYou = () => {
  const navigate = useNavigate();
  return (
    <div className="OfferForYou containCenter">
      <div className="top">
        <div className="left">
          <p>Offer</p>
          <h2>We Offer Organic For You</h2>
        </div>
        <div className="right">
          <button onClick={() => navigate("/shop")}>
            View All Product{" "}
            <span>
              <FiArrowRight />
            </span>
          </button>
        </div>
      </div>
      <div className="bot">
        <div className="padding-10">
          <div className="cards">
            <CardShop />
            <CardShop />
            <CardShop />
            <CardShop />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferForYou;
