import React from "react";
import { HpImg2_1, HpImg2_2 } from "../resource";
import { IoArrowForwardCircle } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HpNews = () => {
  const navigate = useNavigate()
  return (
    <div className="HpNews containCenter ">
      <div className="top">
        <div className="left">
          <p>News</p>
          <h2>Discover weekly content about organic food, & more</h2>
        </div>
        <div className="right">
          <button  onClick={()=>navigate('/news')}>
            More News{" "}
            <span>
              <IoArrowForwardCircle />
            </span>
          </button>
        </div>
      </div>
      <div className="bot">
        <div className="box">
          <div className="img">
            <img src={HpImg2_1} alt="" />
            <p>
              25<span>Nov</span>
            </p>
          </div>
          <div className="content">
            <p className="author">
              <span>
                <FaUser />
              </span>{" "}
              By Rachi Card
            </p>
            <h2>The Benefits of Vitamin D & How to Get It</h2>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio, nostrum?
            </p>
            <button  onClick={()=>navigate('/news/blog')}>
            Read More{" "}
              <span>
                <IoArrowForwardCircle />
              </span>
            </button>
          </div>
        </div>
        <div className="box">
          <div className="img">
            <img src={HpImg2_2} alt="" />
            <p>
              25<span>Nov</span>
            </p>
          </div>
          <div className="content">
            <p className="author">
              <span>
                <FaUser />
              </span>{" "}
              By Rachi Card
            </p>
            <h2>The Benefits of Vitamin D & How to Get It</h2>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio, nostrum?
            </p>
            <button  onClick={()=>navigate('/news/blog')}>
              Read more{" "}
              <span>
                <IoArrowForwardCircle />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HpNews;
