import React, { useEffect } from "react";
import {
  DirtyHands,
  HindOgorodda,
  LimeBg,
  Pot,
  Q_pattern,
} from "../resource";

const QualityStandart = () => {
  const top0 = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  useEffect(() => {
    top0();
  }, []);
  return (
    <>
      <div className="bgc A7DADA">
        <div className="QualityStandart containCenter">
          <div className="bgimg">
            <img className="bg1" src={LimeBg} alt="YAMETE" />
            <img src={Q_pattern} alt="KUDASAY" />
            <p>Quality Standard</p>
          </div>
        </div>
      </div>
      <div className="QualityStandart1 containCenter">
        <div className="img">
          <img src={HindOgorodda} alt="" />
        </div>
        <div className="text">
          <div className="text-1">
            <h2>Organic Store Services</h2>
            <p>
              t is a long established fact that a reader will be distracted by
              the readable content of a page when looking a layout. The point of
              using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. <br /> <br />{" "}
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and auncover many web
              sites still in their infancy. Various versions have evolved over
              the years
            </p>
          </div>
          <div className="text-2">
            <div className="img1">
              <img src={DirtyHands} alt="" />
            </div>
            <div className="info">
              <h3>Why Organic</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat.
                page editors now use Lorem Ipsum as their default model text,
                and auncover.
              </p>
            </div>
          </div>
          <div className="text-2">
            <div className="info">
              <h3>Speciality Produce</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat.
                page editors now use Lorem Ipsum as their default model text,
                and auncover.
              </p>
            </div>
            <div className="img1">
              <img src={Pot} alt="" />
            </div>
          </div>
          <br />
          <br />
          <div className="text-1">
            <h2>We farm your land</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking a layout. The point of
              using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>
          <div className="btn_group">
            <p><span>01</span>Best quality support</p>
            <p><span>02</span>Money back guarantee</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default QualityStandart;
