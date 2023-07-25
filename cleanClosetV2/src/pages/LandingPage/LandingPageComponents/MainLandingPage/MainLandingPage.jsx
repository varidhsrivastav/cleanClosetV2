// import React from "react";
// import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./MainLandingPage.css";
import hands from "./image/hands-removebg-preview.png";
// import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

const MainLandingPage = () => {
  // const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  return (
    <div className="MainLandingPageMainContainer">
      <div className="MainLandingPageContainer">
        <div className="MainLandingPageContainerIntro">
          <h1 data-aos="fade-right">Uplift.</h1>
          <h1 data-aos="zoom-out-up">Donate.</h1>
          <h1 data-aos="fade-left">Support.</h1>
        </div>
        <div className="MainLandingPageContainerPara">
          <h5>
            Maybe your small contribution could get some clothes for a young boy
            during the chilly nights, and donate for a change.
          </h5>
        </div>
        <div className="MainLandingPageContainerButtonsConatiner">
          <div className="MainLandingPageContainerButtons1">
            <Link to="/donor">
              <button className="DonateButton">
                <span className="button_top"> Donate Now</span>
              </button>
            </Link>
            
          </div>
          <div className="MainLandingPageContainerButtons2">
            {/*      
<button class="button-28" role="button">ADD NGO</button> */}
          </div>
        </div>
      </div>
      <div className="MainLandingPageMainContainerImg">
        <img src={hands} alt="" />
      </div>
    </div>
  );
};

export default MainLandingPage;
