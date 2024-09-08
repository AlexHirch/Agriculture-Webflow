import React, { useState } from "react";
import "../styles/navbar.scss";
import { LogoOrganick } from "../resource";
import { NavLink, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { TiShoppingCart } from "react-icons/ti";
import { GoArrowUp } from "react-icons/go";

const Navbar = () => {
  const navigate = useNavigate();

  const [scrollValue, setScrollValue] = useState(0);

  window.onscroll = function () {
    setScrollValue(document.documentElement.scrollTop);
  };

  return (
    <div className="NavBar containCenter">
      <div className="nav-left">
        <div onClick={() => navigate("/")} className="logo">
          <img src={LogoOrganick} alt="Logo-Organick" />
        </div>
        <div className="navigation">
          <div className="page-link">
            <NavLink to={"/"}>Home</NavLink>
          </div>
          <div className="page-link">
            <NavLink to={"/about"}>About</NavLink>
          </div>
          <div className="page-link">
            <div className="pages">
              <NavLink className="p" to={"/pages"}>
                Pages{" "}
                <span>
                  <IoIosArrowForward />
                </span>
              </NavLink>
              <div className="page">
                <NavLink to={"/pages/our-team"}>Our Team</NavLink>
                <NavLink to={"/shop/product"}>ShopSingle</NavLink>
                <NavLink to={"/pages/servise-page"}>Services</NavLink>
                <NavLink to={"/pages/quality-standart"}>
                  QualityStandart
                </NavLink>
                <NavLink to={"/pages/contact-us"}>Contact Us</NavLink>
                <NavLink to={"/jhbhdvsjbhj"}>PageNotFound</NavLink>
              </div>
            </div>
          </div>
          <div className="page-link">
            <NavLink to={"/shop"}>Shop</NavLink>
          </div>
          <div className="page-link">
            <NavLink to={"/projects"}>Projects</NavLink>
          </div>
          <div className="page-link">
            <NavLink to={"/news"}>News</NavLink>
          </div>
        </div>
      </div>
      <div className="search_cart">
        <form className="search-nav">
          <input type="text" />
          <button type="submit">
            <FiSearch />
          </button>
        </form>
        <div className="shopping-path">
          <p>
            <span>
              <TiShoppingCart />
            </span>
            Cart (0)
          </p>
        </div>
      </div>
      <div
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className={scrollValue > 100 ? "btn-top active" : "btn-top"}
      >
        <p>
          <GoArrowUp />
        </p>
      </div>
    </div>
  );
};

export default Navbar;
