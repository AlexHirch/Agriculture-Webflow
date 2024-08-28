import React from "react";
import { Carrot, Leaves, Lime_pink, Limon, Portfolio_pattern, Raspberry, Strobery, Tomato } from "../resource";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const PortfolioStandart = () => {
  const navigate = useNavigate()
  return (
    <>
      {/* <div className="bubble"></div> */}
      <div className="bgc F2F7F7">
        <div className="PortfolioStandart containCenter">
          <div className="bgimg">
            <img className="bg1" src={Strobery} alt="YAMETE" />
            <img className="bg2" src={Strobery} alt="YAMETE" />
            <img src={Portfolio_pattern} alt="KUDASAY" />
            <p>Portfolio Standard</p>
          </div>
        </div>
      </div>
      <div className="Porfolio_Box">
        <div className="box">
          <div className="img">
            <img src={Lime_pink} alt="" />
            <div className="btn">
              <p>
              <IoIosArrowForward />
              </p>
            </div>
          </div>
          <h4>Green & Tasty Lemon</h4>
          <p>Fruits</p>
        </div>
        <div className="box">
          <div className="img">
            <img src={Carrot} alt="" />
            <div className="btn">
              <p>
              <IoIosArrowForward />
              </p>
            </div>
          </div>
          <h4>Green & Tasty Lemon</h4>
          <p>Fruits</p>
        </div>
        <div className="box">
          <div className="img">
            <img src={Leaves} alt="" />
            <div className="btn">
              <p>
              <IoIosArrowForward />
              </p>
            </div>
          </div>
          <h4>Green & Tasty Lemon</h4>
          <p>Fruits</p>
        </div>
        <div className="box">
          <div className="img">
            <img src={Tomato} alt="" />
            <div className="btn">
              <p>
              <IoIosArrowForward />
              </p>
            </div>
          </div>
          <h4>Green & Tasty Lemon</h4>
          <p>Fruits</p>
        </div>
        <div className="box">
          <div className="img">
            <img src={Raspberry} alt="" />
            <div className="btn">
              <p onClick={()=>navigate("/projects/black-raspberry")}>
              <IoIosArrowForward />
              </p>
            </div>
          </div>
          <h4>Green & Tasty Lemon</h4>
          <p>Fruits</p>
        </div>
        <div className="box">
          <div className="img">
            <img src={Limon} alt="" />
            <div className="btn">
              <p>
              <IoIosArrowForward />
              </p>
            </div>
          </div>
          <h4>Green & Tasty Lemon</h4>
          <p>Fruits</p>
        </div>
      </div>
    </>
  );
};

export default PortfolioStandart;
