import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { gulushlagan, hind, tuvak } from "../resource";
import { useNavigate } from "react-router-dom";

const TeamAbout = () => {
  const navigate = useNavigate()
  return (
    <div className="TeamAbout">
      <div className="containCenter">
        <p className="pp">
          <span className="Yellowtail">Team</span>
          <span className="h3">Our Organic Experts</span>
          <span className="small">
            <br />
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </span>
        </p>
        <br />
        <br />
        <div className="boxes">
          <div className="box">
            <div onClick={()=> navigate('/')} className="img">
              <img src={hind} alt="" />
            </div>
            <div onClick={()=> navigate('/')} className="text">
              <h3>Giovani Bacardo</h3>
              <p>Farmer</p>
            </div>
            <div className="icons">
              <div className="icon">
                <FaTwitter />
              </div>
              <div className="icon">
                <FaFacebook />
              </div>
            </div>
          </div>
          <div className="box">
            <div className="img">
              <img src={gulushlagan} alt="" />
            </div>
            <div className="text">
              <h3>Giovani Bacardo</h3>
              <p>Farmer</p>
            </div>
            <div className="icons">
              <div className="icon">
                <IoLogoInstagram />
              </div>
              <div className="icon">
                <FaTwitter />
              </div>
              <div className="icon">
                <FaFacebook />
              </div>
            </div>
          </div>
          <div className="box">
            <div className="img">
              <img src={tuvak} alt="" />
            </div>
            <div className="text">
              <h3>Giovani Bacardo</h3>
              <p>Farmer</p>
            </div>
            <div className="icons">
              <div className="icon">
                <IoLogoInstagram />
              </div>
              <div className="icon">
                <FaTwitter />
              </div>
              <div className="icon">
                <FaFacebook />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamAbout;
