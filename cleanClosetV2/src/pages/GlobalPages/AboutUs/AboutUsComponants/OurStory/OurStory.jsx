import React from 'react';
import myphoto from "./image/churh street (2).jpeg";
import "./Ourstory.css"
const OurStory = () => {
  return (
    <div className='OurStoryMainContainer'>
        <div className="OurStoryContainer container">
            <div className="OurStoryContainerContent">
                <h1>Our Story</h1>
                <p>Clean Closet started in 2023 to help the victims lacking relief amenities, with a significant focus on clean clothing.
<br />
With time we realized that millions of people residing in the underdeveloped areas of our country lack access to clean clothing. So, we decided to change that by using the power of social media and connect the haves and have nots.
<br />
What started as a conscious thought became a significant turning point for us. As we grew, we received thousands of clothes in donations that were unfit to be used, which led us to establish our in-house recycling facility.</p>
            </div>
            <div className="OurStroyContainerImage">
          

                <img src={myphoto} alt="" />
            
            </div>
        </div>
    </div>
  )
}

export default OurStory
