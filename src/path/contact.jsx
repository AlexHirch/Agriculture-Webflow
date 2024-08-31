import React, { useEffect, useState } from "react";
import "../styles/contact.scss";
import {
  Apelsin,
  ApelsinPattern,
  Banan11,
  BigLeaf,
  Call,
  Mail,
} from "../resource";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";

const ContactUs = () => {
  const [vis, setVis] = useState(false);

  const top0 = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  useEffect(() => {
    top0();
  }, []);
  return (
    <>
      <div className="bgc F3F3F5">
        <div className="ContactUs containCenter">
          <div className="bgimg">
            <img className="bg1" src={Apelsin} alt="YAMETE" />
            <img className="bg2" src={Apelsin} alt="YAMETE" />
            <img className="pattern" src={ApelsinPattern} alt="KUDASAY" />
            <p>Shop Single</p>
          </div>
        </div>
      </div>

      <div className="single_shop_product containCenter">
        <div className="top">
          <div className="left">
            <img src={Banan11} alt="" />
          </div>
          <div className="right">
            <div className="content">
              <h2>We'd love to talk about how we can work together.</h2>
              <p className="comment">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </p>
              <div className="contacts">
                <div className="box1">
                  <img src={Mail} alt="" />
                  <p>
                    Massege <span>support@organic.com</span>
                  </p>
                </div>
                <div className="box1">
                  <img src={Call} alt="" />
                  <p>
                    Contact Us
                    <span>+01 123 456 789</span>
                  </p>
                </div>
                <div className="icons">
                  <div className="social">
                    <span>
                      <FaInstagram />
                    </span>
                    <span>
                      <FaFacebook />
                    </span>
                    <span>
                      <FaTwitter />
                    </span>
                    <span>
                      <FaPinterest />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bot">
          <img src={BigLeaf} alt="" />
          <div className="text">
            <p className="yellow">Location</p>
            <p className="h2">Our Farms</p>
            <p className="small">
              Established fact that a reader will be distracted by the readable
              content of a page when looking a layout. The point of using.
            </p>
            <div className="box1">
              <div className="img">
                <HiOutlineLocationMarker />
              </div>
              <p>
                New York, USA:{" "}
                <span>299 Park Avenue New York, New York 10171</span>
              </p>
            </div>
            <div className="box1">
              <div className="img">
                <HiOutlineLocationMarker />
              </div>
              <p>
                London, UK:<span>30 Stamford Street, London SE1 9LQ</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="inputs">
        <form>
          <div className="in1">
            <p>Full Name*</p>
            <input type="text" placeholder="Your Email Address" />
            <p>Company*</p>
            <input type="text" placeholder="example@yourmail.com" />
          </div>
          <div className="in1">
            <p>Your Email*</p>
            <input type="email" placeholder="yourcompany name here" />
            <p>Subject*</p>
            <input type="text" placeholder="how can we help" />
          </div>
          <div className="in2">
            <p>Message*</p>
            <textarea name="" id="" placeholder="Message"></textarea>
          </div>
          <button>Send Message</button>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
