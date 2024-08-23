import React from "react";
import { HomeAboutUs, Icon1, Icon2 } from "../resource";
import { IoMdArrowRoundForward } from "react-icons/io";

const HomeAbout_us = () => {
  return (
    <div className="HomeAbout_us containCenter">
      <img className="background" src={HomeAboutUs} alt="" />
      <div className="content">
        <p className="pp">About Us</p>
        <p className="h2">We Believe in Working Accredited Farmers</p>
        <p className="small">
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>
        <div className="cards">
          <div className="card">
            <img src={Icon1} alt="" />
            <div className="text">
              <p className="h3">Organic Foods Only</p>
              <p className="small">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </p>
            </div>
          </div>
          <div className="card">
            <img src={Icon2} alt="" />
            <div className="text">
              <p className="h3">Quality Standards</p>
              <p className="small">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </p>
            </div>
          </div>
        </div>
        <button>
          Shop Now <span><IoMdArrowRoundForward /></span>
        </button>
      </div>
    </div>
  );
};

export default HomeAbout_us;
