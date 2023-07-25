import  { useContext, } from "react";
import buddha from "./Image/buddha.png";

import { multiStepContext } from "./DonationFormContext/DonationFormContext";
import "./DonationRegistration.css";
import Stage1 from "./Stages/Stage1";
import Stage2 from "./Stages/Stage2";
import "../Globalcss/Button.css";
// import register from "./Stages/Image/write.png";
// import verify from "./Stages/Image/pin.png";
import "swiper/css";
import "swiper/css/pagination";
import Stage3 from "./Stages/Stage3/Stage3";
import Stage4 from "./Stages/Stage4/Stage4";
import Stage5 from "./Stages/Stage5/Stage5";
import Stage6 from "./Stages/Stage6/Stage6";
// import Stage3 from "./Stages/Stage3/Stage3";

const DonationRegistration = () => {
  const {
    currentStep,
    userdata,
   
  } = useContext(multiStepContext);

  const PostData = async (e) => {
    e.preventDefault();
    const {name,
      email,
      phone,
      gender,
      infection,
      infectionName,
      pickupService,
      NumberOfCloths,
      weightOfCloths,
      durationOfCloths,
      conditionOfCloths,
      AddressLine1,
      AddressLine2,
      state,
      city,
      country,
      pinCode,
      dateOfPickup} = userdata;

    const res = await fetch("http://localhost:5002/donorRegister", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        gender,
        infection,
        infectionName,
        pickupService,
        NumberOfCloths,
        weightOfCloths,
        durationOfCloths,
        conditionOfCloths,
        AddressLine1,
        AddressLine2,
        state,
        city,
        country,
        pinCode,
        dateOfPickup,
      }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("invalid");
      console.log("invalid");
    } else {
      window.alert("valid");
      console.log("valid");
    }
  };

  const ShowStep = (step) => {
    switch (step) {
      case 1:
        return <Stage1 />;
      case 2:
        return <Stage2 />;
      case 3:
        return <Stage3 />;
      case 4:
        return <Stage4 />;
      case 5:
        return <Stage5 />;
      case 6:
        return <Stage6 />;
        default:
          return <>WRONG CHOICE</>
    }
  };
  return (
    <div className="DoationBasicDetailFormMContainer">
      <div className="DoationBasicDetailFormContainer lg:flex ">
      
        <div className="DoationBasicDetailFormRSide flex-1">
          <form method="POST">
            {ShowStep(currentStep)}
            {currentStep === 5 ? (
              <div>
                <button type="submit" value="register" onClick={PostData}>5</button>
              </div>
            ) : null}
          </form>
          {/* <div>
            {(typeof backendData.user === 'udefined' )? (
              <p>loading...</p>
            ):(
              backendData.user.map((user, i )=>{
                <p key={i}>{user}</p>
              })
            )}
          </div> */}
        </div>
        <div className="DsFRightSide flex-1 bg-heroPagebg">
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
        <hr />
      </div>
    </div>
  );
};

export default DonationRegistration;
