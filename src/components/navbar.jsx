import React, { useState } from "react";
import "../styles/navbar.scss";
import { LogoOrganick, ShopingCart } from "../resource";
import { NavLink, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { GoArrowUp } from "react-icons/go";
import { FaBars, FaWindowClose } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const Navbar = ({ cart1, setCart1 }) => {
  const navigate = useNavigate();

  const [scrollValue, setScrollValue] = useState(0);
  const [vis, setVis] = useState(false);
  const [search, setSearch] = useState(false);

  window.onscroll = function () {
    setScrollValue(document.documentElement.scrollTop);
  };

  return (
    <div className="NavBar containCenter">
      <div className="nav-left">
        <div onClick={() => navigate("/")} className={search ? "logo active" : "logo"}>
          <img src={LogoOrganick} alt="Logo-Organick" />
        </div>
        <div className={vis ? "navigation active" : "navigation"}>
          <button onClick={() => setVis(false)} className="xmark">
          <FaWindowClose />
          </button>
          <div onClick={() => setVis(false)} className="page-link">
            <NavLink to={"/"}>Home</NavLink>
          </div>
          <div onClick={() => setVis(false)} className="page-link">
            <NavLink to={"/about"}>About</NavLink>
          </div>
          <div onClick={() => setVis(false)} className="page-link">
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
                <NavLink to={"/pages/password"}>Password</NavLink>
                <NavLink to={"/jhbhdvsjbhj"}>PageNotFound</NavLink>
              </div>
            </div>
          </div>
          <div onClick={() => setVis(false)} className="page-link">
            <NavLink to={"/shop"}>Shop</NavLink>
          </div>
          <div onClick={() => setVis(false)} className="page-link">
            <NavLink to={"/projects"}>Projects</NavLink>
          </div>
          <div onClick={() => setVis(false)} className="page-link">
            <NavLink to={"/news"}>News</NavLink>
          </div>
        </div>
      </div>
      <div className="search_cart">
        <form className={search ? "search-nav active" : "search-nav"}>
          <input type="text" />
          <button className={search ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              setSearch(!search);
            }}
            type="submit"
          >
            <IoSearch />
          </button>
        </form>
        <div className="shopping-path">
          <p>
            <span>
              <img src={ShopingCart} alt="" />
            </span>
            Cart ({cart1})
          </p>
        </div>
        <button onClick={() => setVis(true)} className="barsbtn">
          <FaBars />
        </button>
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
