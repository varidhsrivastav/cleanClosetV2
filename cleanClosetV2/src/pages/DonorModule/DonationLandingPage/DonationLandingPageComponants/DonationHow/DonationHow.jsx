// import React from "react";
// import location from "./Image/location (1).png";
import "./DonationHow.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
// import happychild1 from "./Image/download (1).jpeg";
// import happychild2 from "./Image/download (2).jpeg";
// import happychild3 from "./Image/download (3).jpeg";
import happychild3 from "./Image/download (4).jpeg";
import map from "./Image/placeholder.png";
import truck from "./Image/delivery-truck.png";
import recyce from "./Image/recycle.png";
import bill from "./Image/assignment.png";
import delpackage from "./Image/package.png";
import mail from "./Image/mail.png";

const DonationHow = () => {
  return (
    <div className="DonationHowMainContainer">
      <div className="DonationHowContainer container">
        <div className="DonationHowLeftSide">
          <div className="DonationHowLeftSideHeading">
            <h1>GET YOUR CLOTHES PICKED PAN INDIA!</h1>
            <p>
              Be a reason behind someone’s smile by sharing what you own. We
              help you reach people in the furthest places of India
            </p>
          </div>
          <div className="DonationHowWeWork">
            <div className="DonationHowWeWorkBody">
              <div className="DonationHowWeWorkBoadyIcon">
                <img src={map} alt="" />
              </div>
              <div className="DonationHowWeWorkBodyContent">
                <p>
                  Pick-up service available across 25000+ zip codes in India.
                </p>
              </div>
            </div>
            <div className="DonationHowWeWorkBody">
              <div className="DonationHowWeWorkBoadyIcon">
                <img src={truck} alt="" />
              </div>
              <div className="DonationHowWeWorkBodyContent">
                <p>
                  Pick-up service is outsourced to a third party and not
                  inhouse.
                </p>
              </div>
            </div>
            <div className="DonationHowWeWorkBody">
              <div className="DonationHowWeWorkBoadyIcon">
                <img src={recyce} alt="" />
              </div>
              <div className="DonationHowWeWorkBodyContent">
                <p>
                  Unusable old clothes will be upcycled under Refresh – our
                  recycling arm.
                </p>
              </div>
            </div>
            <div className="DonationHowWeWorkBody">
              <div className="DonationHowWeWorkBoadyIcon">
                <img src={bill} alt="" />
              </div>
              <div className="DonationHowWeWorkBodyContent">
                <p>
                  Please read the term and condition for the limit on quantity
                  per request
                </p>
              </div>
            </div>
            <div className="DonationHowWeWorkBody">
              <div className="DonationHowWeWorkBoadyIcon">
                <img src={delpackage} alt="" />
              </div>
              <div className="DonationHowWeWorkBodyContent">
                <p>Please read the packing instruction</p>
              </div>
            </div>
            <div className="DonationHowWeWorkBody">
              <div className="DonationHowWeWorkBoadyIcon">
                <img src={mail} alt="" />
              </div>
              <div className="DonationHowWeWorkBodyContent">
                <p>
                  Reach to us for any further queries: <br />
                  <span className="ContactColor">E-mail Us:</span> <br />
                  <span className="ContactColorInfo">info@cleancloset.com </span>
                  <br />
                  <span className="ContactColor">WhatsApp Us:</span> <br />
                  <span className="ContactColorInfo"> +91-9565178122</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="DonateHowRightSide">
          <div className="DonateHowRightSideImgeContainer">
            <img src={happychild3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationHow;
