
import "./Making.css";
import india from "./Image/imdiamap.png";
// import { Link } from "react-router-dom";
const MakingDiff = () => {
  return (
    <div className="MakingDiffMainContainer">
      <div className="MakingDiffConatiner container">
        <div className="MakingDiffPhoto">
          <img src={india} alt="" data-aos="fade-up-right" />
        </div>
        <div className="MakingDiffContent"  data-aos="fade-up-left">
          <h6>Making Difference</h6>
          <h1>How were making a difference</h1>
          <p>
            Many charitable organizations rely on donated clothes to fund their
            programs and services. By donating clothes, you can help these
            organizations continue their work and support individuals and
            communities in need.
          </p>
          <div className="MangingDiffInsideContent">
            <div className="MakingDiffInsideContentBody">
              <div className="MakingDiffICBodyIcon">
                <i className="fi fi-sr-recycle"></i>
              </div>
              <div className="MakingDiffICBodyContent">
                <b>Reducing waste:</b> Donating clothes instead of throwing them
                away can help reduce waste in landfills and prevent
                environmental damage. Clothes that are still in good condition
                can be reused, reducing the demand for new clothes and the
                resources required to produce them.
              </div>
            </div>
            <div className="MakingDiffInsideContentBody">
              <div className="MakingDiffICBodyIcon">
                <i className="fi fi-sr-star"></i>
              </div>
              <div className="MakingDiffICBodyContent">
                <b> Providing basic necessities:</b> By donating clothes, you
                can help individuals who cannot afford to purchase new clothing,
                especially in low-income communities. Clothing is a basic
                necessity that everyone needs, and donating gently used or new
                clothes can provide warmth and protection to those in need.
              </div>
            </div>
          </div>
          <p>
            Donating clothes can help foster a sense of community and bring
            people together. Volunteering at a clothing drive or donation center
            can provide opportunities for people to connect with others and work
            towards a common goal.
          </p>
          <div className="MakingDiffButton">
            <div className="MakingDiffButtonbtn">
            <a href="/DonorLandingPage">
              <button className="button-18" >
                Donate Now
              </button>
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakingDiff;
