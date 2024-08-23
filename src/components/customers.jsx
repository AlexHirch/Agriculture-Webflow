import React from "react";
import { Customer, Yban1 } from "../resource";
import RateStar from "./Rate";

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
        <div className="box-2">
          <img src={Customer} alt="" />
          <RateStar />
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been.
          </p>
          <h4>Sara Taylor</h4>
          <h5>Consumer</h5>
        </div>
        <div className="box-3">
          <span className="btn"></span>
          <span className="btn active"></span>
          <span className="btn"></span>
        </div>
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
