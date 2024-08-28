import React from "react";
import { Aloe, NewsPattern, Portfolio_pattern, Strobery } from "../resource";

const News = () => {
  return (
    <>
      <div className="bgc F7F7F9">
        <div className="News containCenter">
          <div className="bgimg">
            <img className="bg1" src={Aloe} alt="YAMETE" />
            <img className="bg2" src={Aloe} alt="YAMETE" />
            <img className="pattern" src={NewsPattern} alt="KUDASAY" />
            <p >Recent  News</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
