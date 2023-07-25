// import React from "react";
import { Link } from "react-router-dom";
import "./DonationHeader.css";
// import Donate from "./Image/colthpng.png";
import happychild from "./Image/happy_children.jpg";
const DonationHeader = () => {
  return (
    <div className="DonationHeaderIntroSectionMainContainer">
      <div className="DonationHeaderIntroSectionContainer">
        <div className="DonationHeaderImageintro">
          <img src={happychild} alt="" />
        </div>
        <h1>DID YOU KNOW?</h1>
        <p>
          “90% of people we reach out to would buy a piece of cloth only five
          times in their entire lives. The clothes you donate today will be worn
          by somebody who can not afford them as we can. Donate generously!”
        </p>
        <Link to="/donor/timeline">

        <button className="DonateButton DonationHeaderIntroSectionContainerBtn ">
    <span>Donate Now</span>
</button>
        </Link>
      </div>
    </div>
  );
};

export default DonationHeader;
