import React, { useContext } from 'react';
import "./DonationOrderUpdate.css";
import delpackage from "./image/package.png";
import trackinglink from "./image/link (1).png";
import { dashboardContext } from '../../DonatationDshboardContext/DonationDashboardContext';

const DonationOrderUpdate = () => {
    const { currentDashboard, setDashboard} = useContext(dashboardContext);
  return (
    <div className='DonationOrderUpdateMainContainer'>
     <div className="DonationOrderUpdateContainer">
            <h4>On the way</h4>
        <div className="DonationOrderUpdateOrderContainer">
            <div className="DonationOrderUpdateOrder">
                <div className="DonationOrderUpdateOrderTime">
                    <h5>Estimated delivery by jul 18,2023</h5>
                    <h6>Shipped on jul 12, 2023</h6>
                </div>
                <hr />
                <div className="DonationOrderUpdateOrderContent">
                    <div className="DonationOrderUpdateOrderContentImg">
                        <img src={delpackage} alt="" />
                    </div>
                    <div className="DonationOrderUpdateOrderContentDesc">
                        <h5>Your Custom Box</h5>
                        <ul>
                            <li>1kg of cloths </li>
                            <li>Donating to Muskurahat Foundation</li>
                        </ul>
                    </div>
                </div>
              
                    <div className="DonationOrderUpdateOrderContentAdd">
                        <h5>Shipping address</h5>
                        <p>jj borwell road ganpati nagar, Bengaluru</p>
                    </div>
                    <div className="DonationOrderUpdateOrderContentTrack">
                       <p> Track shipment </p>
                       <a onClick={()=>setDashboard(4)}>
                       <img src={trackinglink} alt="" />
                       </a>
                    </div>
            </div>
            <div className="DonationUpdateOrderHelp">
                <h5>Got question ? Message Support</h5>
                <p>Our friendly support team is here for question about billing. shipping and account changes.</p>
                <p>24 hour response time</p>
                <button className='DonationUpdateOrderHelpbUTTON'>
                    Message support 
                </button>
            </div>
        </div>
        <h4>History</h4>
        <div className="DonationOrderUpdateOrderContainer">
            <div className="DonationOrderUpdateOrder">
                <div className="DonationOrderUpdateOrderTime">
                    <h5>Delivered on jul 18,2023</h5>
                    <h6>Shipped on jul 12, 2023</h6>
                </div>
                <hr />
                <div className="DonationOrderUpdateOrderContent">
                    <div className="DonationOrderUpdateOrderContentImg">
                        <img src={delpackage} alt="" />
                    </div>
                    <div className="DonationOrderUpdateOrderContentDesc">
                        <h5>Your Custom Box</h5>
                        <ul>
                            <li>1kg of cloths </li>
                            <li>Donated to Muskurahat Foundation</li>
                        </ul>
                    </div>
                </div>
              
                    <div className="DonationOrderUpdateOrderContentAdd">
                        <h5>Shipping address</h5>
                        <p>jj borwell road ganpati nagar, Bengaluru</p>
                    </div>
                    <div className="DonationOrderUpdateOrderContentTrack">
                       <p> Track shipment history</p>
                       <img src={trackinglink} alt="" />
                    </div>
            </div>
        </div>
     </div>
    </div>
  )
}

export default DonationOrderUpdate
