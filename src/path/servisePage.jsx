import React, { useEffect, useState } from "react";
import {
  BgImgService,
  IconForService1,
  IconForService2,
  IconForService3,
  IconForService4,
  IconForService5,
  IconForService6,
  Olmalar,
  Pista,
  Service_pattern,
} from "../resource";
import { IoArrowForwardCircle } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import "../styles/service.scss";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ServisePage = () => {
  const navigate = useNavigate()
  const top0 = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  const [ytvis, setYtvis] = useState(false);

  const ytvid1 = document.getElementById("ytvid1");
  const ytvid = () => {
    ytvid1.innerHTML = `
    <iframe
      width="100%"
      height="100%"
      src="https://youtube.com/embed/0XL9IWlUFms?si=SHbzwH_ZhxWm36MN?autoplay=1&mute=1"
    ></iframe>
    `;
  };

  useEffect(() => {
    top0();
  }, []);
  return (
    <>
      <div className={ytvis ? "youtubesd" : "youtubesd viss"}>
        <button
          onClick={() => {
            ytvid1.innerHTML = "";
            setYtvis(false);
          }}
          className="close"
        >
          <IoIosCloseCircleOutline />
        </button>
        <div id="ytvid1">
          <iframe
            width="100%"
            height="100%"
            src="https://youtube.com/embed/0XL9IWlUFms?si=SHbzwH_ZhxWm36MN?autoplay=1&mute=1"
          ></iframe>
        </div>
      </div>
      <div className="bgc F3F3F5">
        <div className="ServisePage containCenter">
          <div className="bgimg">
            <img className="bg1" src={Olmalar} alt="YAMETE" />
            <img src={Service_pattern} alt="KUDASAY" />
            <p>Services</p>
          </div>
        </div>
      </div>
      <div className="ServisePage1 bgc F9F8F8">
        <p className="pp">
          <span>What we Grow </span>
          <br />
          Better Agriculture for Better Future
        </p>
        <div className="footer containCenter">
          <footer>
            <div className="top">
              <div className="left">
                <ul>
                  <li>
                    <img src={IconForService1} alt="" />
                    <h3>Dairy Products</h3>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptat accusantium doloremqlaudantium. Sed ut
                      perspiciatis
                    </p>
                  </li>
                  <li>
                    <img src={IconForService2} alt="" />
                    <h3>Agricultural Services</h3>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptat accusantium doloremqlaudantium. Sed ut
                      perspiciatis
                    </p>
                  </li>
                  <li>
                    <img src={IconForService3} alt="" />
                    <h3>Store Services</h3>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptat accusantium doloremqlaudantium. Sed ut
                      perspiciatis
                    </p>
                  </li>
                </ul>
              </div>
              <div className="center">
                <img src={Pista} alt="" />
              </div>
              <div className="right">
                <ul>
                  <li>
                    <img src={IconForService4} alt="" />
                    <h3>Organic Products</h3>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptat accusantium doloremqlaudantium. Sed ut
                      perspiciatis
                    </p>
                  </li>
                  <li>
                    <img src={IconForService5} alt="" />
                    <h3>Delivery Services</h3>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptat accusantium doloremqlaudantium. Sed ut
                      perspiciatis
                    </p>
                  </li>
                  <li>
                    <img src={IconForService6} alt="" />
                    <h3>Fresh Vegetables</h3>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptat accusantium doloremqlaudantium. Sed ut
                      perspiciatis
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="btnn">
              <button onClick={()=>navigate("/news/blog")}>
                Explore More{" "}
                <span>
                  <IoArrowForwardCircle />
                </span>
              </button>
            </div>
          </footer>
        </div>
      </div>
      <div className="ServisePage2 bgc FBF5E3">
        <div className="containCenter">
          <div className="bgimg">
            <img src={BgImgService} alt="" />
          </div>
          <div className="content">
            <h2 className="pp">
              <span>Organic Only </span>
              <br />
              Everyday Fresh & Clean
            </h2>
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the
            </p>
            <button
              onClick={() => {
                setYtvis(true);
                ytvid();
              }}
            >
              <FaPlay />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServisePage;
