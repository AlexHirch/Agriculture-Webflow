import React from "react";
import RateStar from "../Rate";
import { useNavigate } from "react-router-dom";
import { Product1 } from "../../resource";
import "../../styles/home.scss";

const CardShop = () => {
  const navigate = useNavigate();
  return (
    <div className="card">
      <p className="top">Vegetable</p>
      <div onClick={() => navigate("/shop/product")} className="img">
        <img src={Product1} alt="" />
      </div>
      <div className="padding-10">
        <p onClick={() => navigate("/shop/product")} className="Name">
          Calabrese Broccoli
        </p>
        <hr />
        <div className="price">
          <p>
            <span>$20.00</span>$13.00
          </p>
          <div className="rate">
            <RateStar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardShop;
