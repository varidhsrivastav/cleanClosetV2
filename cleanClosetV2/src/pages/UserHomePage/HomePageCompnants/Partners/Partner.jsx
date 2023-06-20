import cbf from "./Image/clothsBoxFoundation.png";
import gf from "./Image/gf.png";
import logo from "./Image/logo.gif";
import logo2 from "./Image/logo.png";
import musk from "./Image/MuskLogo.png";
import nkf from "./Image/nkf.png";
import smf from "./Image/smf.webp";
import udaan from "./Image/udaan-new-logo-big.png";
import { Swiper, SwiperSlide, } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "./partner.css";

const Partner = () => {
  return (
    <div>
       <div className="container py-10 ">
          <Swiper
          className="flex justify-center items-center w-full"
            spaceBetween={50}
            slidesPerView={8}
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
                slidesPerView: 2,
                spaceBetween: 40,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              700: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
              900: {
                slidesPerView: 6,
                spaceBetween: 40,
              },
              1200: {
                slidesPerView: 7,
                spaceBetween: 60,
              },
            }}
          >
            <SwiperSlide className="flex justify-center items-center w-full">
              <div className=" flex justify-center items-center w-full">
                <img src={cbf} alt="" className="items-center self-center max-w-100px max-h-100px grayscale hover:grayscale-0" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Logo2 logo">
                <img src={gf} alt="" className="items-center self-center max-w-100px max-h-100px grayscale hover:grayscale-0"/>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Logo3 logo">
                <img src={logo} alt="" className="items-center self-center max-w-100px max-h-100px grayscale hover:grayscale-0"/>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Logo4 logo">
                <img src={logo2} alt="" className="items-center self-center max-w-100px max-h-100px grayscale hover:grayscale-0 " />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Logo5 logo">
                <img src={musk} alt="" className="items-center self-center max-w-100px max-h-100px grayscale hover:grayscale-0"/>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Logo5 logo">
                <img src={nkf} alt="" className="items-center self-center max-w-100px max-h-100px grayscale hover:grayscale-0"/>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Logo5 logo">
                <img src={smf} alt="" className="items-center self-center max-w-100px max-h-100px grayscale hover:grayscale-0" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Logo5 logo">
                <img src={udaan} alt="" className="items-center self-center max-w-100px max-h-100px grayscale hover:grayscale-0" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
    </div>
  )
}

export default Partner
