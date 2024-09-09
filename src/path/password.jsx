import React from "react";
import { Bgpatpas, NewsPattern, PasswordPhoto } from "../resource";
import "../styles/password.scss"
import { IoMdArrowRoundForward } from "react-icons/io";

const Password = () => {
  return (
    <>
    <div className="bgc">
      <div className="Password containCenter">
        <div className="bgimg">
          <img src={Bgpatpas} alt="KUDASAY" />
          <p>Protected Page</p>
        </div>
      </div>
    </div>
    <div className="Password1">
        <form>
            <div className="img">
                <img src={PasswordPhoto} alt="" />
            </div>
            <div className="input">
                <p>
                Password
                </p>
                <input type="password" placeholder="Enter Your Password"/>
                <button>Send Now <span>
                    <IoMdArrowRoundForward />
                  </span></button>
            </div>
        </form>
    </div>
    </>
  );
};

export default Password;
