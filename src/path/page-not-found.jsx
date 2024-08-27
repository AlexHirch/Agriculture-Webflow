import React from "react";
import { PageNotFoundBg, PageNotFoundPattern } from "../resource";
import { IoMdArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bgc B5C3C6">
        <div className="PageNotFound containCenter">
          <div className="bgimg">
            <img src={PageNotFoundBg} alt="" />
            <img src={PageNotFoundPattern} alt="" />
          </div>
          <div className="text">
            <h1>404</h1>
            <h2>Page not found</h2>
            <p>The page you are looking for doesn't exist or has been moved</p>
            <button onClick={() => navigate("/")}>
              Go to Homepage{" "}
              <span>
                <IoMdArrowRoundForward />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
