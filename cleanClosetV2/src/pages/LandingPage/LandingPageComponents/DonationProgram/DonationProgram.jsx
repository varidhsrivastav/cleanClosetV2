// import React from "react";
// import { a } from "react-router-dom";
import "./DonationProgram.css";
import donationimage2 from "./image/download.jpeg"
const DonationProgram = () => {
  return (
    <div className="DonationProgramMainContainer">
      <div className="DonationProgramContainer container">
        <h6>Featured Donations</h6>
        <h1>Some Urgent Donation Program</h1>
        <div className="DonationProgramCardContainer">
          <div className="DonationProgramCardBody" data-aos="flip-up">
            <div className="DonationProgramCardImage">
            <img src={donationimage2} alt="" />
            </div>
            <div className="DonationProgramCardContent">
              <h4>Help orphans to live happily</h4>
              <p>
              Share a little, give a lot - donate clothes to help an orphans heart!
              </p>
              <div className="DonationProgramCardProgressBar">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "95%" }}
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    95%
                  </div>
                </div>
                <h6>Target: 10 Kg</h6>
              </div>
              <div className="DonateNowButton">
              <a href="/DonorLandingPage">
                <button className="button-18">
                  <span className="text">Donate now</span>
                </button>
              </a>
              </div>
            </div>
          </div>
          <div className="DonationProgramCardBody" data-aos="flip-up">
            <div className="DonationProgramCardImage">
              <img src={donationimage2} alt="" />
            </div>
            <div className="DonationProgramCardContent">
              <h4>Help orphans to live happily</h4>
              <p>
              Your old clothes, their new hope - donate today to help orphans cope!
              </p>
              <div className="DonationProgramCardProgressBar">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    25%
                  </div>
                </div>
                <h6>Target: 20kg</h6>
               
              </div>
              <div className="DonateNowButton">
              <a href="/DonorLandingPage">
                <button className="button-18">
                  <span className="text">Donate now</span>
                </button>
              </a>
              </div>
            </div>
          </div>
          <div className="DonationProgramCardBody" data-aos="flip-up">
            <div className="DonationProgramCardImage">
            <img src={donationimage2} alt="" />
            </div>
            <div className="DonationProgramCardContent">
              <h4>Help OldAge to live happily</h4>
              <p>
              Dont let their smiles fade away - donate clothes and make their day!
              </p>
              <div className="DonationProgramCardProgressBar">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "65%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    65%
                  </div>
                </div>
                <h6>Target: 50Kg</h6>
              </div>
              <div className="DonateNowButton">
              <a href="/DonorLandingPage">
                <button className="button-18">
                  <span className="text">Donate now</span>
                </button>
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationProgram;
