import React from "react";
import { LogoOrganick, SubscribeBgImg } from "../resource";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="subscribe containCenter">
        <div className="img">
          <img src={SubscribeBgImg} alt="BgImg" />
        </div>
        <div className="content">
          <p>Subscribe to our Newsletter</p>
          <form>
            <input type="email" placeholder="Your Email Address" />
            <button>Subscribe</button>
          </form>
        </div>
      </div>
      <footer className="containCenter">
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
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing{" "}
            </p>
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
          <p>
            Copyright © <span>Organick</span> | Designed by{" "}
            <span>VictorFlow</span> Templates - Powered by <span>Webflow</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
