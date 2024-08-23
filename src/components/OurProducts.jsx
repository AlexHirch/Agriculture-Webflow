import React from "react";
import RateStar from "./Rate";
import { Product1 } from "../resource";
import { IoMdArrowRoundForward } from "react-icons/io";

const OurProducts = () => {
  return (
    <div className="OurProducts containCenter">
      <p className="pp">
        <span>Categories </span>
        <br />
        Our Products
      </p>
      <div className="cards">
        <div className="card">
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
        <div className="card">
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
        <div className="card">
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
        <div className="card">
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
        <div className="card">
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
        <div className="card">
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
        <div className="card">
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
        <div className="card">
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
      <button>
        Load More
        <span>
          <IoMdArrowRoundForward />
        </span>
      </button>
    </div>
  );
};

export default OurProducts;
