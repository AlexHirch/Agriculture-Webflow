import React from "react";
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
  ShopPatternBg,
} from "../resource";
import { IoArrowForwardCircle } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";

const ServisePage = () => {
  return (
    <>
      <div className="bgc F3F3F5">
        <div className="ServisePage containCenter">
          <div className="bgimg">
            <img className="bg1" src={Olmalar} alt="YAMETE" />
            <img src={ShopPatternBg} alt="KUDASAY" />
            <p>Services</p>
          </div>
        </div>
      </div>
      <div className="ServisePage1 bgc F9F8F8">
        <p className="pp">
          <span>Categories </span>
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
              <button>
                More News{" "}
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
            <button><FaPlay /></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServisePage;
