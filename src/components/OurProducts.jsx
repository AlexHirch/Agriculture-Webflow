import React from "react";
import RateStar from "./Rate";
import { Product1 } from "../resource";
import { IoMdArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import CardShop from "./mini-components/card";

const OurProducts = () => {
  const navigate = useNavigate();
  return (
    <div className="OurProducts containCenter">
      <p className="pp">
        <span>Categories </span>
        <br />
        Our Products
      </p>
      <div className="cards">
        <CardShop/>
        <CardShop/>
        <CardShop/>
        <CardShop/>
        <CardShop/>
        <CardShop/>
        <CardShop/>
        <CardShop/>
      </div>
      <button onClick={()=>navigate("shop")}>
        Load More
        <span>
          <IoMdArrowRoundForward />
        </span>
      </button>
    </div>
  );
};

export default OurProducts;
