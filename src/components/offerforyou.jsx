import React from "react";
import { IoArrowForwardCircle } from "react-icons/io5";
import RateStar from "./Rate";
import { Product1 } from "../resource";
import { useNavigate } from "react-router-dom";

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
              <IoArrowForwardCircle />
            </span>
          </button>
        </div>
      </div>
      <div className="bot">
        <div className="cards">
          <div onClick={() => navigate("/shop/product")} className="card">
            <p className="top">Vegetable</p>
            <div className="img">
              <img src={Product1} alt="" />
            </div>
            <p className="Name">Calabrese Broccoli</p>
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
          <div onClick={() => navigate("/shop/product")} className="card">
            <p className="top">Vegetable</p>
            <div className="img">
              <img src={Product1} alt="" />
            </div>
            <p className="Name">Calabrese Broccoli</p>
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
          <div onClick={() => navigate("/shop/product")} className="card">
            <p className="top">Vegetable</p>
            <div className="img">
              <img src={Product1} alt="" />
            </div>
            <p className="Name">Calabrese Broccoli</p>
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
          <div onClick={() => navigate("/shop/product")} className="card">
            <p className="top">Vegetable</p>
            <div className="img">
              <img src={Product1} alt="" />
            </div>
            <p className="Name">Calabrese Broccoli</p>
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
      </div>
    </div>
  );
};

export default OfferForYou;
