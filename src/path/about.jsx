import React, { useEffect } from "react";
import '../styles/about.scss'
import {
  About1img,
  AboutBg,
  AboutImgGreen,
  AboutMiniIcon1,
  AboutMiniIcon2,
  AboutUsBg,
  Icon1_1,
  Icon1_2,
  Icon1_3,
  Icon1_4,
  kurkuma,
} from "../resource";
import { IoMdArrowRoundForward } from "react-icons/io";
import TeamAbout from "../components/teamAbout";

const About = () => {
  
  const top0 = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  useEffect(() => {
    top0();
  }, []);
  return (
    <>
      <div className="bgc EDEAEB">
        <div className="About containCenter">
          <div className="bgimg">
            <img className="bg1" src={AboutUsBg} alt="YAMETE" />
            <img className="bg2" src={AboutUsBg} alt="YAMETE" />
            <img className="pattern" src={AboutBg} alt="KUDASAY" />
            <p>About Us</p>
          </div>
        </div>
      </div>
      <div className="AUs1">
        <div className="About1 containCenter">
          <img className="background" src={About1img} alt="" />
          <div className="content">
            <p className="pp">About Us</p>
            <p className="h2">We do Creative Things for Success</p>
            <p className="small">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
              <br />
              <br />
              <br />
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
            <div className="cards">
              <div className="card">
                <img src={AboutMiniIcon1} alt="" />
                <div className="text">
                  <p className="h3">Modern Agriculture Equipment</p>
                </div>
              </div>
              <div className="card">
                <img src={AboutMiniIcon2} alt="" />
                <div className="text">
                  <p className="h3">No growth hormones are used</p>
                </div>
              </div>
            </div>
            <button>
              Explore More{" "}
              <span>
                <IoMdArrowRoundForward />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="AUs2 bgc F9F8F8">
        <div className="About2 containCenter">
          <div className="BgGreen">
            <img className="background" src={AboutImgGreen} alt="" />
          </div>
          <div className="content">
            <p className="pp">Why Choose us?</p>
            <p className="h2">We do not buy from the open market & traders.</p>
            <p className="small">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
            <div className="cards">
              <div className="card">
                <div className="buttonHz">
                  <p className="elipse"></p>
                  <p>100% Natural Product</p>
                </div>
                <p className="small">
                  Simply dummy text of the printing and typesetting industry
                  Lorem Ipsum
                </p>
              </div>
              <br />
              <div className="card">
                <div className="buttonHz">
                  <p className="elipse"></p>
                  <p>100% Natural Product</p>
                </div>
                <p className="small">
                  Simply dummy text of the printing and typesetting industry
                  Lorem Ipsum
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="About2-1 containCenter">
          <div className="boxes">
            <div className="box">
              <img src={Icon1_1} alt="" />
              <h3>Return Policy</h3>
              <p>Simply dummy text of the printintypesetting industry.</p>
            </div>
            <div className="box">
              <img src={Icon1_2} alt="" />
              <h3>100% Fresh</h3>
              <p>Simply dummy text of the printintypesetting industry.</p>
            </div>
            <div className="box">
              <img src={Icon1_3} alt="" />
              <h3>Support 24/7</h3>
              <p>Simply dummy text of the printintypesetting industry.</p>
            </div>
            <div className="box">
              <img src={Icon1_4} alt="" />
              <h3>Secured Payment</h3>
              <p>Simply dummy text of the printintypesetting industry.</p>
            </div>
          </div>
        </div>
      </div>
      <TeamAbout />
      <div className="bgc a274C5B">
        <div className="About OfferForYou containCenter">
          <div className="top">
            <p>About Us</p>
            <h2>What We Offer for You</h2>
          </div>
          <div className="bot">
            <div className="cards">
              <div className="card">
                <div className="img">
                  <img src={kurkuma} alt="" />
                </div>
                <p className="Name">Spicy</p>
              </div>
              <div className="card">
                <div className="img">
                  <img src={kurkuma} alt="" />
                </div>
                <p className="Name">Nuts & Feesd</p>
              </div>
              <div className="card">
                <div className="img">
                  <img src={kurkuma} alt="" />
                </div>
                <p className="Name">Fruits</p>
              </div>
              <div className="card">
                <div className="img">
                  <img src={kurkuma} alt="" />
                </div>
                <p className="Name">Vegetable</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
