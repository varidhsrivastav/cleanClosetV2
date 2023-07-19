// import React from "react";
import "./Partner.css";
import { Swiper, SwiperSlide, } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import cbf from "./Image/clothsBoxFoundation.png";
import gf from "./Image/gf.png";
import logo from "./Image/logo.gif";
import logo2 from "./Image/logo.png";
import musk from "./Image/MuskLogo.png";
import nkf from "./Image/nkf.png";
import smf from "./Image/smf.webp";
import udaan from "./Image/udaan-new-logo-big.png";
// import stackedwave from "./Image/stacked-waves-haikei.png";
const Partners = () => {
  return (
    <div className="ParterMainContainer">

          {/* <h1>Trusted By</h1> */}
      <div className="PartnerContainer container">
      {/* <h6>Trusted by the best NGOs</h6> */}
        <div className="CompaniesLogo">
          <Swiper
            spaceBetween={50}
            slidesPerView={5}
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              375: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              700: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              900: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
              1200: {
                slidesPerView: 6,
                spaceBetween: 60,
              },
            }}
          >
            <SwiperSlide>
              <div className="Logo1 logo">
                <img src={cbf} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Logo2 logo">
                <img src={gf} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Logo3 logo">
                <img src={logo} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Logo4 logo">
                <img src={logo2} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Logo5 logo">
                <img src={musk} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Logo5 logo">
                <img src={nkf} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Logo5 logo">
                <img src={smf} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Logo5 logo">
                <img src={udaan} alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Partners;
