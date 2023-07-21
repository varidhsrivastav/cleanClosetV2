import React from 'react';
import  "./DonationReward.css";
import certificate from "./Image/download.png";

const DonationReward = () => {
  return (
    <div className='DonationRewardMainContainer'>
      <div className="DonationReawardContainer">
        <div className="DonationReawardContainerCertificate">
        <div className="DonationReawardContainercerByimgadd">
        <h1>Get more Certifiates by donating more </h1>
        <div className="DonationReawardContainercerByimgaddbtn">

        <button>Donate now</button>
        </div>
      </div>
        <h1>Certificates Recived</h1>
          <div className="DonationReawardContainercertificateBody">
    <div className="DonationReawardContainercerByimg">
      <img src={certificate} alt="" />
    </div> 
    {/* <div className="DonationReawardContainercerByimg">
      <img src={certificate} alt="" />
    </div> */}
          </div>
       
        </div>
      </div>
    </div>
  )
}

export default DonationReward
