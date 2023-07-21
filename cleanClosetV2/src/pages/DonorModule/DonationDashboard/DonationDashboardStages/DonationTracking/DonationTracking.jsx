import React, { useContext } from "react";
import { dashboardContext } from "../../DonatationDshboardContext/DonationDashboardContext";
import "./DonationTracking.css";
import backButton from "./left-arrow.png";
const DonationTracking = () => {
    const { currentDashboard, setDashboard} = useContext(dashboardContext);
  return (
    <div className="DonationTrackingMainComponants">
      <div className="DonationTrackingComponants">
        <div className="">
          <div className="">

          <div className="DonationTrackingComponantsTitle">
            <a onClick={()=> setDashboard(1)}>
              <img src={backButton} alt="" />
            </a>
            <h2 className="">Tracking</h2>
          </div>
            <hr />
            
            <div className="timeline DonationTrackingComponantsTimeline">
              <div className="timeline-wrapper">
                <div className="timeline-yr">
                  <span>icon</span>
                </div>
                <div className="timeline-info">
                  <h3>
                    <span>In trasit</span>
                    <small>Date - 18/02/2023</small>
                  </h3>
                  <ul>
                    <li>date - 23/232/323</li>
                    <li>Reached at Bengaluru</li>
                    <li>Reached at Delhi</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-wrapper">
                <div className="timeline-yr">
                  <span>icon</span>
                </div>
                <div className="timeline-info">
                  <h3>
                    <span>In trasit</span>
                    <small>Date - 18/02/2023</small>
                  </h3>
                  <ul>
                    <li>date - 23/232/323</li>
                    <li>Reached at Bengaluru</li>
                    <li>Reached at Delhi</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-wrapper">
                <div className="timeline-yr">
                  <span>icon</span>
                </div>
                <div className="timeline-info">
                  <h3>
                    <span>In trasit</span>
                    <small>Date - 18/02/2023</small>
                  </h3>
                  <ul>
                    <li>date - 23/232/323</li>
                    <li>Reached at Bengaluru</li>
                    <li>Reached at Delhi</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="DonationTrackingComponants">
        <div className="">
          <div className="">
          <div className="DonationTrackingComponantsTitleHistory">
            <h2 className="">Tracking History</h2>
            <hr />
          </div>
            <div className="timelineHistory DonationTrackingComponantsTimeline">
              <div className="timeline-wrapper">
                <div className="timeline-yr">
                  <span>icon</span>
                </div>
                <div className="timeline-info">
                  <h3>
                    <span>In trasit</span>
                    <small>Date - 18/02/2023</small>
                  </h3>
                  <ul>
                    <li>date - 23/232/323</li>
                    <li>Reached at Bengaluru</li>
                    <li>Reached at Delhi</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-wrapper">
                <div className="timeline-yr">
                  <span>icon</span>
                </div>
                <div className="timeline-info">
                  <h3>
                    <span>In trasit</span>
                    <small>Date - 18/02/2023</small>
                  </h3>
                  <ul>
                    <li>date - 23/232/323</li>
                    <li>Reached at Bengaluru</li>
                    <li>Reached at Delhi</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-wrapper">
                <div className="timeline-yr">
                  <span>icon</span>
                </div>
                <div className="timeline-info">
                  <h3>
                    <span>In trasit</span>
                    <small>Date - 18/02/2023</small>
                  </h3>
                  <ul>
                    <li>date - 23/232/323</li>
                    <li>Reached at Bengaluru</li>
                    <li>Reached at Delhi</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationTracking;
