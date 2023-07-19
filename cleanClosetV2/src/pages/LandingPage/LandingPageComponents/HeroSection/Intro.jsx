// import React from "react";
import "./Intro.css";
// import india from "./Image/indiamap.png";
import donate from "./Image/colthpng.png"
// import back from "./Image/mesh-gradient.png"
const Intro = () => {
  return (
    <div className="introMainComponets">
      {/* <div className="back"><img src={back} alt="" /></div> */}
      <div className="IntroComponents ">
      
        <div className="IntroContentSide ">
          <h1>When you <span className="orange">donate</span> to a <span className="blue">charity</span> , you <span className="orange">gain</span>  more than you <span className="blue">lose.</span> </h1>
          <p>
          Maybe your small contribution could get some clothes for a young boy during the chilly nights, and donate for a change.
          </p>
          <div className="IntroButtons">
            <div className="DonateButtons">
              <button className="button-86" role="button">
                Donate Now
              </button>
            </div>
            <div className="DiscoverButton">
              <a href="">Discover now <span className="material-symbols-outlined">
arrow_forward
</span></a>
            </div>
          </div>
          {/* <div className="LandingpageIntroStats">
            <div className="LandingpageIntroStatsContent">
              <dv className="LandingpageIntroStatsCBody">
                <div className="LandingpageIntroStatsCBicon">

                </div>
                <div className="LandingpageIntroStatsCBstats">
                  <h3>7474c</h3>
                  <p>Program Completed</p>
                </div>
              </dv>
            </div>
          </div> */}
        </div>
        <div className="IntroImageSide">
          <div className="IntroMapImage">
            <img src={donate} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
