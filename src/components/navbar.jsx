import React from "react";
import "../styles/navbar.scss"
import { LogoOrganick } from "../resource";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { TiShoppingCart } from "react-icons/ti";

const Navbar = () => {
  return (
    <div className="NavBar containCenter">
      <div className="nav-left">
        <div className="logo">
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
              <p>
                Pages{" "}
                <span>
                <IoIosArrowForward />
                </span>
              </p>
              <div className="page">
                <NavLink to={"/ddd"}>adsadasd</NavLink>
                <NavLink to={"/ddd"}>adsadasd</NavLink>
                <NavLink to={"/ddd"}>adsadasd</NavLink>
                <NavLink to={"/ddd"}>adsadasd</NavLink>
                <NavLink to={"/ddd"}>adsadasd</NavLink>
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
    </div>
  );
};

export default Navbar;
