import React from 'react';
import "./OurObjective.css";
const OurObjective = () => {
  return (
    <div className="OurObjectiveMainContainer ">
    <div className="OurObjectivecontainer container">
    <h6>Objective</h6>
      <h1>OUR
OBJECTIVES</h1>
      {/* <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex!
      </p> */}
      <div className="OurObjectiveCardContainer">
        <div className="OurObjectiveCardBody">
          <div className="OurObjectiveCardicon">
          <i class="fi fi-sr-user-add"></i>
          </div>
          <div className="OurObjectiveCardHeading">
            <h3>ServingThe
Deprived</h3>
          </div>
          <div className="OurObjectiveCardPara">
          Directing blankets, sleeping bags, dhurries and related products towards helping the needy across the nation and pet beds for animal welfare.


          </div>
          
        </div>
        <div className="OurObjectiveCardBody " id="donateatyour">
          <div className="OurObjectiveCardicon">
          <i class="fi fi-sr-recycle"></i>
          </div>
          <div className="OurObjectiveCardHeading" >
            <h3 >Reducing waste</h3>
          </div>
          <div className="OurObjectiveCardPara">
          Donating clothes instead of throwing them away can help reduce waste in landfills and prevent environmental damage.
          </div>
          
        </div>
        <div className="OurObjectiveCardBody">
          <div className="OurObjectiveCardicon">
          <i class="fi fi-sr-user-add"></i>
          </div>
          <div className="OurObjectiveCardHeading">
            <h3>Community outreach</h3>
          </div>
          <div className="OurObjectiveCardPara">
          use its platform to raise awareness about clothing waste and promote environmentally responsible practices
          </div>
         
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default OurObjective
