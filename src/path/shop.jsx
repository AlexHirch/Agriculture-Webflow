import React, { useEffect } from "react";
import { AboutBg, Shaftoli, ShopPattern } from "../resource";
import "../styles/shop.scss";
import CardShop from "../components/mini-components/card";

const Shop = () => {
  const top0 = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  useEffect(() => {
    top0();
  }, []);
  return (
    <>
      <div className="bgc EDF1F5">
        <div className="Shop containCenter">
          <div className="bgimg">
            <img className="bg1" src={Shaftoli} alt="YAMETE" />
            <img className="bg2" src={Shaftoli} alt="YAMETE" />
            <img className="pattern" src={ShopPattern} alt="KUDASAY" />
            <p>Shop</p>
          </div>
        </div>
      </div>
      <div className="shop OurProducts containCenter">
        <div className="cards">
          <CardShop />
          <CardShop />
          <CardShop />
          <CardShop />
          <CardShop />
          <CardShop />
          <CardShop />
          <CardShop />
          <CardShop />
          <CardShop />
          <CardShop />
          <CardShop />
          <CardShop />
          <CardShop />
          <CardShop />
          <CardShop />
        </div>
      </div>
    </>
  );
};

export default Shop;
