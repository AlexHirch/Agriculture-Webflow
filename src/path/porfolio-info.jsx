import React, { useEffect } from "react";
import { Carrot2, Raspberry } from "../resource";
import { IoChevronBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import "../styles/projects.scss"

const PorfolioInfo = () => {
  const navigate = useNavigate();
  const top0 = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  useEffect(() => {
    top0();
  },[])

  return (
    <>
      <div className="PorfolioInfo containCenter">
        <div onClick={() => navigate("/projects")} className="close">
          <IoChevronBackCircle />
        </div>
        <div className="img">
          <img src={Raspberry} alt="" />
        </div>
        <div className="content_box">
          <div className="text">
            <h2>Black Raspberry</h2>
            <p>
              Established fact that a reader will be distracted by the readable
              content of a page when looking a layout. The point of using Lorem
              Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed{" "}
            </p>
          </div>
          <div className="info">
            <p>
              Date <span>: December 4, 2022</span>
            </p>
            <p>
              Client <span>: Kevin Martin</span>
            </p>
            <p>
              Category <span>: Agriculture , Eco</span>
            </p>
            <p>
              Service <span>: Organic Products</span>
            </p>
          </div>
        </div>
      </div>
      <div className="PorfolioInfo1 containCenter">
        <h2>About The Farm:</h2>
        <p>
          t is a long established fact that a reader will be distracted by the
          readable content of a page when looking a layout. The point of using
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
          <br />
          <br />
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and auncover many web sites still
          in their infancy. Various versions have evolved over the years
        </p>
        <div className="img">
          <img src={Carrot2} alt="" />
        </div>
        <h5>The Organic Products</h5>
        <h2>How To Farm:</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking a layout. The point of using
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
          <br />
          <br />
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and auncover many web sites still
          in their infancy. Various versions have evolved over the years
        </p>
        <h2>Conclusion:</h2>
        <p>
          t is a long established fact that a reader will be distracted by the
          readable content of a page when looking a layout. The point of using
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
          <br />
          <br />
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and auncover many web sites still
          in their infancy. Various versions have evolved over the years
        </p>
      </div>
    </>
  );
};

export default PorfolioInfo;
