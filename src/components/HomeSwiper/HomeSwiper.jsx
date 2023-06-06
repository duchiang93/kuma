import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";

import homePic from "../../assets/img/02.png";
import homePic1 from "../../assets/img/03.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.scss";

const HomeSwiper = () => {
  return (
    <div className="swiper-container">
      <Swiper
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="home-swiper"
      >
        <SwiperSlide className="homePic">
          <img src={homePic} alt="" />
        </SwiperSlide>
        <SwiperSlide className="homePic">
          <img src={homePic1} alt="" />
        </SwiperSlide>
      </Swiper>

      <div className="content-box">
        <div className="content-text">
          <h1 className="text1"> 卓越品質 歷久不衰</h1>

          <h2 className="text2">讓經營成為享受</h2>

          <h3 className="text3">酷碼 期待與您的合作</h3>
        </div>
      </div>
    </div>
  );
};

export default HomeSwiper;
