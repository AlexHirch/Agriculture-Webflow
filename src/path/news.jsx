import React, { useEffect } from "react";
import { Aloe, HpImg2_1, HpImg2_2, NewsPattern } from "../resource";
import { IoArrowForwardCircle } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../styles/news.scss"

const News = () => {
  const navigate = useNavigate()
  const top0 = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  useEffect(() => {
    top0();
  }, []);
  return (
    <>
      <div className="newsbg bgc F7F7F9">
        <div className="News containCenter">
          <div className="bgimg">
            <img className="bg1" src={Aloe} alt="YAMETE" />
            <img className="bg2" src={Aloe} alt="YAMETE" />
            <img className="pattern" src={NewsPattern} alt="KUDASAY" />
            <p>Recent News</p>
          </div>
        </div>
      </div>
      <div className="News1 HpNews">
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
              <button onClick={()=>navigate("/news/blog")}>
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
              <button onClick={()=>navigate("/news/blog")}>
                Read more{" "}
                <span>
                  <IoArrowForwardCircle />
                </span>
              </button>
            </div>
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
              <button onClick={()=>navigate("/news/blog")}>
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
              <button onClick={()=>navigate("/news/blog")}>
                Read more{" "}
                <span>
                  <IoArrowForwardCircle />
                </span>
              </button>
            </div>
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
              <button onClick={()=>navigate("/news/blog")}>
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
              <button onClick={()=>navigate("/news/blog")}>
                Read more{" "}
                <span>
                  <IoArrowForwardCircle />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
