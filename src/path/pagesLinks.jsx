import React from "react";
import { NavLink } from "react-router-dom";

const PagesLinks = () => {
  return (
    <div
      style={{
        textAlign: "center",
        display: "grid",
        gap: 10,
        backgroundColor: "#f1f8f4",
        padding: 50,
        color: "#274c5b",
      }}
    >
      <h1 style={{ fontSize: 60, fontFamily: "Arial", fontWeight: 900 }}>
        PagesLinks
      </h1>
      <br />
      <NavLink style={{fontFamily: "Arial", fontWeight: 600, fontSize: 36, color: "#274c5b"}} to={"/pages/our-team"}>Our Team</NavLink>
      <NavLink style={{fontFamily: "Arial", fontWeight: 600, fontSize: 36, color: "#274c5b"}} to={"/shop/product"}>ShopSingle</NavLink>
      <NavLink style={{fontFamily: "Arial", fontWeight: 600, fontSize: 36, color: "#274c5b"}} to={"/pages/servise-page"}>Services</NavLink>
      <NavLink style={{fontFamily: "Arial", fontWeight: 600, fontSize: 36, color: "#274c5b"}} to={"/pages/quality-standart"}>QualityStandart</NavLink>
      <NavLink style={{fontFamily: "Arial", fontWeight: 600, fontSize: 36, color: "#274c5b"}} to={"/jhbhdvsjbhj"}>PageNotFound</NavLink>
    </div>
  );
};

export default PagesLinks;
