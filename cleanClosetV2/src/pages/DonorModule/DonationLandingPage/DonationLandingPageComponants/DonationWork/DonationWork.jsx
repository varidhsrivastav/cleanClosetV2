import React from 'react';
import "./DonationWork.css";
import d1 from "./image/d1.png";
import d2 from "./image/d2.png";
import d3 from "./image/d3.png";
const DonationWork = () => {
  return (
    <div>
      <div className="work container">
      <div className="title">
     
        <h1>How Does it Work?</h1>
        <hr />
      </div>

      <div className="section1">
        <div className="img">
          <img
            src={d1}
            alt=""
          />
        </div>
        <div className="section1Inner">
          <div className="count">01</div>
          <div className="content">
            <div>
              {" "}
              <h3>Connect With Students</h3>
            </div>
            <div>
              {" "}
              <p>
                Create your Perfect profile to get as much students as <br />{" "}
                possible and create your batch with us.
              </p>
            </div>

            <hr />
            {/* <div className="arrow">
              <i class="fas fa-arrow-alt-circle-right"></i>
            </div> */}
          </div>
        </div>
      </div>

      <div className="section1" id="section2">
        <div className="section1Inner">
          <div className="count">02</div>
          <div className="content">
            <h3>Conduct your Classes</h3>
            <p>
              Deliver Quality Education through Live Class or Offline <br />{" "}
              mode with the help Teaching Support Tools.
            </p>
            <hr />
            {/* <div className="arrow">
              {" "}
              <i class="fas fa-arrow-alt-circle-right"></i>
            </div> */}
          </div>
        </div>
        <div className="img">
          <img
            src={d2}
            alt=""
          />
        </div>
      </div>

      <div className="section1">
        <div className="img">
          <img
            src={d3}
            alt=""
          />
        </div>
        <div className="section1Inner">
          <div className="count">03</div>
          <div className="content">
            <h3>Create your Credibility</h3> <br />
            <p>
              By Collecting Good Feedback & Students Growth at your <br />{" "}
              Online Profile attract more students in your classes.
            </p>
            <hr />
            {/* <div className="arrow">
              {" "}
              <i class="fas fa-arrow-alt-circle-right"></i>
            </div> */}
          </div>
        </div>
      </div>

      <div className="startButton">
       
      <button class="button-22" role="button">
        🚩 LETS'S START!
      </button>
      </div>
      {/* test */}
    </div>
    </div>
  )
}

export default DonationWork
