import React, { useState } from "react";
import { Anor, Product1, ShopPatternBg, SingleProduct } from "../resource";
import RateStar from "../components/Rate";
import { IoMdArrowRoundForward } from "react-icons/io";

const ShopSingle = () => {
  const [vis, setVis] = useState(false)
  return (
    <>
      <div className="bgc F3F3F5">
        <div className="ShopSingle containCenter">
          <div className="bgimg">
            <img className="bg1" src={Anor} alt="YAMETE" />
            <img className="bg2" src={Anor} alt="YAMETE" />
            <img src={ShopPatternBg} alt="KUDASAY" />
            <p>Shop Single</p>
          </div>
        </div>
      </div>

      <div className="single_shop_product containCenter">
        <div className="top">
          <div className="left">
            <img src={SingleProduct} alt="" />
          </div>
          <div className="right">
            <div className="content">
              <h2>Health Pistachios</h2>
              <RateStar />
              <p className="price">
                <span>$20.00</span>
                $13.00
              </p>
              <p className="comment">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </p>
              <div className="quantity">
                <p>Quantity :</p>
                <input type="number" defaultValue={1} min={1} />
                <button className="Add_to_card">
                  Add to Cart{" "}
                  <span>
                    <IoMdArrowRoundForward />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bot">
          <div className="btn">
            <button onClick={()=> setVis(false)} className={vis ? "":"active"}>Product Description</button>
            <button onClick={()=> setVis(true)} className={vis ? "active":""}>Additional Info</button>
          </div>
          <div className="text">
            <p className={vis ? "pp" : "pp active"}>
              Welcome to the world of natural and organic. Here you can discover
              the bounty of nature. We have grown on the principles of health,
              ecology, and care. We aim to give our customers a healthy
              chemical-free meal for perfect nutrition. It offers about 8–10%
              carbs. Simple sugars — such as glucose and fructose — make up 70%
              and 80% of the carbs in raw.
            </p>
            <p className={vis ? "info active" : "info"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              suscipit.
            </p>
          </div>
        </div>
      </div>
      <div className="OurProducts shopsingle containCenter">
        <p className="pp">Related Products</p>
        <div className="cards">
          <div className="card">
            <p className="top">Vegetable</p>
            <div className="img">
              <img src={Product1} alt="" />
            </div>
            <p className="Name">Calabrese Broccoli</p>
            <hr />
            <div className="price">
              <p>
                <span>$20.00</span>$13.00
              </p>
              <div className="rate">
                <RateStar />
              </div>
            </div>
          </div>
          <div className="card">
            <p className="top">Vegetable</p>
            <div className="img">
              <img src={Product1} alt="" />
            </div>
            <p className="Name">Calabrese Broccoli</p>
            <hr />
            <div className="price">
              <p>
                <span>$20.00</span>$13.00
              </p>
              <div className="rate">
                <RateStar />
              </div>
            </div>
          </div>
          <div className="card">
            <p className="top">Vegetable</p>
            <div className="img">
              <img src={Product1} alt="" />
            </div>
            <p className="Name">Calabrese Broccoli</p>
            <hr />
            <div className="price">
              <p>
                <span>$20.00</span>$13.00
              </p>
              <div className="rate">
                <RateStar />
              </div>
            </div>
          </div>
          <div className="card">
            <p className="top">Vegetable</p>
            <div className="img">
              <img src={Product1} alt="" />
            </div>
            <p className="Name">Calabrese Broccoli</p>
            <hr />
            <div className="price">
              <p>
                <span>$20.00</span>$13.00
              </p>
              <div className="rate">
                <RateStar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopSingle;
