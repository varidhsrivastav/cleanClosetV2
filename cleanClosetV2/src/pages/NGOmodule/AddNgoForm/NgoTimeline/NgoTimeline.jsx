// import React from "react";
import left from "./Image/left-arrow.png"
import "./Ngotimetabl.css";
import certificate from "./Image/certificate.png";
import delivery from "./Image/delivery.png";
import downArrow from "./Image/down-arrow.png";
import registrationForm from "./Image/registration-form.png";
import rightArrow from "./Image/right-arrow.png";
import user from "./Image/user.png";
import { Link } from "react-router-dom";
const NgoTimeline = () => {
    return (
        <div className="DonationTimelineContentMainComponants">
          <div className="DotiButtonBack">
          <Link to="/ngo">
              <img src={left} alt="" />
          </Link>
          </div>
          <div className="DonationTimelineInfoContainer">
            <div className="DonationTimelineContents container">
            <div className="DtpContent">
    
              <h1>Add NGO now with these simple steps</h1>
              <p>Be the reason for someone happiness</p>
            </div>
              <div className="DonationTimelineCard">
                <div className="DonationTimeCardBody">
                  <div className="DTicon flex justify-center">
                    <img src={user} alt="" />
                  </div>
                  <h6>Sign Up</h6>
                  <div className="dtp">
                    <p>Sign up in CleanCloset</p>
                  </div>
                </div>
                <div className="DonationArrow">
                  <div className="RigthArrow ">
                    <img src={rightArrow} alt="" />
                  </div>
                  <div className="DownArrow ">
                    <img src={downArrow} alt="" />
                  </div>
                </div>
                <div className="DonationTimeCardBody">
                  <div className="DTicon flex justify-center">
                    <img src={registrationForm} alt="" />
                  </div>
    
                  <h6>Fill Form</h6>
                  <div className="dtp">
                    <p>Submit Required details</p>
                  </div>
                </div>
                <div className="DonationArrow">
                  <div className="RigthArrow ">
                    <img src={rightArrow} alt="" />
                  </div>
                  <div className="DownArrow ">
                    <img src={downArrow} alt="" />
                  </div>
                </div>
                <div className="DonationTimeCardBody">
                  <div className="DTicon flex justify-center">
                    <img src={delivery} alt="" />
                  </div>
    
                  <h6>Pickup</h6>
                  <div className="dtp">
                    <p>Give the cloths to cleanCloset agent</p>
                  </div>
                </div>
                <div className="DonationArrow">
                  <div className="RigthArrow">
                    <img src={rightArrow} alt="" />
                  </div>
                  <div className="DownArrow">
                    <img src={downArrow} alt="" />
                  </div>
                </div>
                <div className="DonationTimeCardBody">
                  <div className="DTicon flex justify-center">
                    <img src={certificate} alt="" />
                  </div>
                  <h6>Get Certificate</h6>
                  <div className="dtp">
                    <p>Cartified for Humanitory work</p>
                  </div>
                </div>
              </div>
              <div className="DotiButton">
              <Link to="/ngo/timeline/reg">
                
                <button className="DonateButton">
                  Continue
                </button>
              </Link>
              </div>
            </div>
          </div>
        </div>
      );
}

export default NgoTimeline
