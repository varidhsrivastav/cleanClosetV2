import React from 'react';
import { Link } from 'react-router-dom';
import "./DonationVision.css"
const DonationVision = () => {
  return (
    <div className="DonationVisionMainContainer">
      <div className="DonationVisionContainer container">
        <div className="DonationVisionContent">
          <h6>The Vision</h6>
          <h1>
          Transforming your closet into someone's hope - Donate your clothes today!
          </h1>
          <div className="donationVisionContetButton">
          <Link to="/DonorLandingPage/timeline">

            <button className='DonateButton'>Donate now</button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonationVision
