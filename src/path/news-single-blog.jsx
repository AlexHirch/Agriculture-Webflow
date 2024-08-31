import React, { useEffect } from "react";
import { IoChevronBackCircle } from "react-icons/io5";
import { Bogbon } from "../resource";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NewsSingleBlog = () => {
  const navigate = useNavigate();
  const top0 = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  useEffect(() => {
    top0();
  }, []);
  return (
    <>
      <div className="NewsSingleBlog containCenter">
        <div onClick={() => navigate("/news")} className="close">
          <IoChevronBackCircle />
        </div>
        <div className="img">
          <img src={Bogbon} alt="" />
        </div>
        <div className="content_box">
          <div className="text">
            <h5>
              <span className="text_one">Posted On:</span>
              <span> January 6, 2022</span>{" "}
              <span className="icon">
                <FaUser />
              </span>{" "}
              <span>By Rachi Card</span>
            </h5>
            <h2>Research More Organic Food</h2>
            <p>
              Established fact that a reader will be distracted by the readable
              content of a page when looking a layout. The point of using Lorem
              Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed
            </p>
          </div>
        </div>
      </div>
      <div className="NewsSingleBlog1 containCenter">
        <p>
          Uniquely matrix economically sound value through cooperative
          technology. Competently parallel task fully researched data and
          enterprise process improvements. Collaboratively expedite quality
          manufactured products via client-focused results quickly communicate
          enabled technology and turnkey leadership skills. Uniquely enable
          accurate supply chains rather than friction technology.
        </p>
        <h2>Preferred Form of Vitamin D?</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking a layout. The point of using
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
        <ul>
          <li>
            <p> Publishing packages and web pageLorem Ipsum as their default</p>
          </li>
          <li>
            <p> Content here, content here', making it look like readable</p>
          </li>
          <li>
            <p> Packages and web pageLorem Ipsum as their default</p>
          </li>
        </ul>
        <h4>
          “The first rule of any organic used in a business is that nature
          applied to an efficient operation will magnify the efficiency. The
          second is that organic applied to an inefficient operation will
          magnify the health.”
        </h4>
        <h2>Make perfect organic product with us</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking a layout. The point of using
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
        <ul>
          <li>
            <p>Publishing packages and web pageLorem Ipsum as their default</p>
          </li>
          <li>
            <p>Content here, content here', making it look like readable</p>
          </li>
          <li>
            <p>Packages and web pageLorem Ipsum as their default</p>
          </li>
          <li>
            <p>more-or-less normal distribution of letters</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NewsSingleBlog;
