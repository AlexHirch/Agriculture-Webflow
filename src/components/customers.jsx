import React from "react";
import { Yban1 } from "../resource";
import Slider from "./slider";

const Customers = () => {
  return (
    <div className="customers containCenter">
      <div className="Background"  >
        <img className="left" src={Yban1} alt=""/>
        <img className="right" src={Yban1} alt=""/>
      </div>
      <div className="container1">
        <div className="box-1">
          <p>Testimonial</p>
          <h1>What Our Customer Saying?</h1>
        </div>
        <Slider/>
        <hr />
      </div>
      <div className="contain2">
        <div className="bg">
            <p>100%<span>Organic</span></p>
        </div>
        <div className="bg">
            <p>285<span>Active Product</span></p>
        </div>
        <div className="bg">
            <p>350+<span>Organic Orchads</span></p>
        </div>
        <div className="bg">
            <p>25+<span>Years of Farming</span></p>
        </div>
      </div>
    </div>
  );
};

export default Customers;
