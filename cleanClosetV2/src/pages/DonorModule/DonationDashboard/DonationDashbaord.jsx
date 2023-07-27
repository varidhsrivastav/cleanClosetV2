import React, { useContext } from "react";
import Profilepic from "./image/profile.webp";
import "./DonationDashbaord.css";
import DonationDashOverview from "./DonationDashboardStages/DonationDashOverview/DonationDashOverview";
import DonationReward from "./DonationDashboardStages/DonationReward/DonationReward";
import DonationTracking from "./DonationDashboardStages/DonationTracking/DonationTracking";
import UpdateAccount from "./DonationDashboardStages/UpadateAccount/UpdateAccount";
import { dashboardContext } from "./DonatationDshboardContext/DonationDashboardContext";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import DonationOrderUpdate from "./DonationDashboardStages/DonationOrderUpdate/DonationOrderUpdate";

const DonationDashbaord = () => {
  const { user, isAuthenticated, isLoading, logout, loginWithRedirect } = useAuth0();
  const { currentDashboard, setDashboard } = useContext(dashboardContext);
  
  console.log(user);
  const ShowDashboardStep = (Dashboardstep) => {
    switch (Dashboardstep) {
      case 1:
        return <DonationOrderUpdate />;
      case 2:
        return <DonationReward />;
      case 3:
        return <UpdateAccount />;
      case 4:
        return <DonationTracking />;
      default:
        return <>wrong input</>
      // return <DonationOrderUpdate/>
    }
  };
  return (
    <div className="DonationDashbaordMainContainer">
      <div className="DonationDashboardContainer">
        <div className="DonationDashboardupProfile">
          <div className="DonationDashboardupProfileHeader container">
        
          {
            isAuthenticated && <div className="DonationDashboardupProfileHeaderImg">
            <img src={user.picture} alt={user.name} />
            </div>
          }
          {
            isAuthenticated &&
            <div className="DonationDashboardupProfileHeaderInfo">
              <h3>{user.name}</h3>
              <h4>{user.email}</h4>
              <div className="DonationDashboardupProfileHeaderInfoBtn">
                <button>Edit Profile</button>
              </div>
            </div>
          }
           
            {/* <div className="DonationDashboardupProfileHeaderHelp">

            <p>Because of you now <span className="Big">02</span> people are able to walkk in winter </p> 
            </div> */}
            <div className="DonationDashboardupProfileHeaderBio">
              <div className="DonationDupPrHeadBioStats">
                <div className="DonationDupPrHeadBioStatsDonated">
                  <h4>02</h4>
                  <p>people benefited </p>
                </div>
                <div className="DonationDupPrHeadBioStatsDonated">
                  <h4>02 kg</h4>
                  <p>Cloths Donated</p>
                </div>
                <div className="DonationDupPrHeadBioStatsDonated">
                  <h4>022</h4>
                  <p>Reward Collected</p>
                </div>
              </div>
            </div>

            <hr />
            <div className="DonationDupPrHeadTabs">
              <div className="DonationDashboardtabs">
                <a
                  onClick={() => {
                    setDashboard(1);
                  }}
                >
                  <h5>Donated Product</h5>
                </a>
                <a
                  onClick={() => {
                    setDashboard(2);
                  }}
                >
                  <h5>Reward</h5>
                </a>
                <a
                  onClick={() => {
                    setDashboard(3);
                  }}
                >
                  <h5>Update Account</h5>
                </a>
              </div>
              <hr />
            </div>
          </div>
          <div className="DonationDashboardupProfileContent container">
            {ShowDashboardStep(currentDashboard)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationDashbaord;

// export default withAuthenticationRequired (DonationDashbaord, {
//   onRedirecting: () => console.log("not athenticated"),
// });
