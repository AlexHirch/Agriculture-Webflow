import React from "react";
import "../styles/footer.scss";
import { LogoOrganick, SubscribeBgImg } from "../resource";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate()
  return (
    <div className="footera containCenter">
      <div className="subscribebr1">
        <div className="img">
          <img src={SubscribeBgImg} alt="BgImg" />
        </div>
        <div className="content">
          <p className="sub">
            Subscribe to <br /> our Newsletter
          </p>
          <form className="sub">
            <input type="email" placeholder="Your Email Address" />
            <button>Subscribe</button>
          </form>
        </div>
      </div>
      <footer className="containCenter lalaku">
        <div className="top">
          <div className="left">
            <ul>
              <li>
                <h3>Contact Us</h3>
              </li>
              <li>
                <p>Email</p>
                <p>needhelp@Organia.com</p>
              </li>
              <li>
                <p>Phone</p>
                <p>666 888 888</p>
              </li>
              <li>
                <p>Address</p>
                <p>88 road, borklyn street, USA</p>
              </li>
            </ul>
          </div>
          <hr />
          <div className="center">
            <img src={LogoOrganick} alt="" />
            <p>
              Simply dummy text of the printing and typesetting industry. <br />{" "}
              Lorem Ipsum simply dummy text of the printing{" "}
            </p>
            <div className="social">
              <a target="_blank" href="https://www.instagram.com/discoveragriculture?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                <span>
                  <FaInstagram />
                </span>
              </a>
              <a target="_blank" href="https://www.facebook.com/p/Agriculture-100068310005265/">
                <span>
                  <FaFacebook />
                </span>
              </a>
              <a target="_blank" href="https://x.com/euagri">
                <span>
                  <FaTwitter />
                </span>
              </a>
              <a target="_blank" href="https://www.pinterest.com/westgateacademy/agriculture/">
              <span>
                <FaPinterest />
              </span>
              </a>
            </div>
          </div>
          <hr />
          <div className="right">
            <ul>
              <li>
                <h3>Utility Pages</h3>
              </li>
              <li>
                <p>Style Guide</p>
              </li>
              <li>
                <p>404 Not Found</p>
              </li>
              <li>
                <p>Password Protected</p>
              </li>
              <li>
                <p>Licences</p>
              </li>
              <li>
                <p>Changelog</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="bot">
          <p onClick={()=>navigate("/license")} style={{cursor:"pointer"}}>
            Copyright © <span>Organick</span> | Designed by{" "}
            <span>VictorFlow</span> Templates - Powered by <span>Webflow</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
