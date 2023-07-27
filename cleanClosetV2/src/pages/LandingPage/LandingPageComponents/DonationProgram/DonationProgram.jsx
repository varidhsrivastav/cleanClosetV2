// import React from "react";
// import { a } from "react-router-dom";
import { Link } from "react-router-dom";
import "./DonationProgram.css";
import donationimage2 from "./image/download.jpeg"
const DonationProgram = () => {
  return (
    <div className="DonationProgramMainContainer">
      <div className="DonationProgramContainer container">
        <h6>Featured Donations</h6>
        <h1 className="text-4xl font-bold">Some Urgent Donation Program</h1>
        <div className="DonationProgramCardContainer">
        <div className="DonationProgramCardBody" data-aos="flip-up">
            <div className="DonationProgramCardImage">
            <img src={donationimage2} alt="" />
            </div>
            <div className="DonationProgramCardContent">
              <h4 className="text-lg font-extrabold m-2 ">Help OldAge to live happily</h4>
              <p className="mb-2">
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
            
              <Link to="/donor">
                <button className="mt-4">
                  <span className="text button-40 mt-2">Donate now</span>
                </button>
              </Link>
              </div>
            </div>
          </div>
          <div className="DonationProgramCardBody" data-aos="flip-up">
            <div className="DonationProgramCardImage">
            <img src={donationimage2} alt="" />
            </div>
            <div className="DonationProgramCardContent">
              <h4 className="text-lg font-extrabold m-2 ">Help OldAge to live happily</h4>
              <p className="mb-2">
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
              <Link to="/donor">
                <button className="mt-4">
                  <span className="text button-40 mt-2">Donate now</span>
                </button>
              </Link>
              </div>
            </div>
          </div>
          <div className="DonationProgramCardBody" data-aos="flip-up">
            <div className="DonationProgramCardImage">
            <img src={donationimage2} alt="" />
            </div>
            <div className="DonationProgramCardContent">
              <h4 className="text-lg font-extrabold m-2 ">Help OldAge to live happily</h4>
              <p className="mb-2">
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
              <Link to="/donor">
                <button className="mt-4">
                  <span className="text button-40 mt-2">Donate now</span>
                </button>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationProgram;
