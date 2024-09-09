import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import CardShop from "./mini-components/card";
import "../styles/our_product.scss"

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
