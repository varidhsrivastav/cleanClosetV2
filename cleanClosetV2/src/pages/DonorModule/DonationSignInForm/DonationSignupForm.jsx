import React from "react";
import "./DonationSignupForm.css";
import google from "./Image/google.png";
import linkedin from "./Image/linkedin.png";
import buddha from "./Image/buddha.png";
import logo from "./Image/login.png";
// import { useAuth0 } from "@auth0/auth0-react";



const DonationSignupForm = () => {
  // const { loginWithRedirect } = useAuth0();
  return (
    <div className="DonationSignupFormMainComponants">
      <div className="DonationSignupFormComponants">
        <div className="DsFLeftSide">

        {/* <button onClick={() => loginWithRedirect()}>Log In</button> */}
        <div className="DsFLeftSideLogo">
          <img src={logo} alt="" />
        </div>

          <div className="DsFleftSideContent">
            <h1>Sign in to CleanCloset</h1>
          </div>
          <div className="DsFleftLoginButtons">
            <div className="GoogleLogin">
              <button  className="GoogleLoginButton DonationLoginButton">
                <img src={google} alt="" />
                <p>Sign Up with Google</p>
              </button>
            </div>
            <div className="LinkedInLogin">
              <button
                className="GoogleLoginButton  DonationLoginButton"
              >
                <img src={linkedin} alt="" />
                <p>Sign Up with Linkedin</p>
              </button>
            </div>
          </div>
        </div>

        <div className="DsFRightSide">
          <div className="DsFRightSideContent">
            <h2>
              “Before giving, the mind of the giver is happy; while giving, the
              mind of the giver is made peaceful; and having given, the
              <br /> mind of the giver is uplifted.”
            </h2>
            <p>-Gautam Buddha</p>
          </div>
          <div className="DsFRigthSideContentImage">
            <img src={buddha} alt="" />
          </div>
          <div className="TermAndCondition">
            <p>
              By signing up you agree to CleanCloset  
              <a href="/">
              Terms of service and Privacy
              policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationSignupForm;
