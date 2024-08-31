import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Navigation, Pagination } from "swiper/modules";
import { Customer } from "../resource";
import RateStar from "./Rate";
import { useNavigate } from "react-router-dom";

const Slider = () => {
  const navigate = useNavigate();
  return (
    <div className="slidehome">
      <Swiper
        style={{
          "--swiper-pagination-color": "#68a47f",
          "--swiper-pagination-bullet-inactive-color": "#b5c3c6",
          "--swiper-pagination-bullet-size": "10px",
        }}
        modules={[Pagination, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="swiperhome">
            <div className="box-2">
              <img
                onClick={() => navigate("/pages/our-team")}
                src={Customer}
                alt=""
              />
              <RateStar />
              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.
              </p>
              <h4 onClick={() => navigate("/pages/our-team")}>Sara Taylor</h4>
              <h5>Consumer</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperhome">
            <div className="box-2">
              <img
                onClick={() => navigate("/pages/our-team")}
                src={Customer}
                alt=""
              />
              <RateStar />
              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.
              </p>
              <h4 onClick={() => navigate("/pages/our-team")}>Sara Taylor</h4>
              <h5>Consumer</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperhome">
            <div className="box-2">
              <img
                onClick={() => navigate("/pages/our-team")}
                src={Customer}
                alt=""
              />
              <RateStar />
              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.
              </p>
              <h4 onClick={() => navigate("/pages/our-team")}>Sara Taylor</h4>
              <h5>Consumer</h5>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
