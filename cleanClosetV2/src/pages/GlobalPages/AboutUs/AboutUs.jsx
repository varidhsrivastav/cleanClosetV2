// import React from 'react';
// import DonateNgoCard from "../Footer/FooterComponants/DonateNgoCard/DonateNgoCrad"
import AboutUsIntroSection from './AboutUsComponants/AboutUsIntroSection/AboutUsIntroSection';
import OurObjective from './AboutUsComponants/OurObjective/OurObjective';
import OurStory from './AboutUsComponants/OurStory/OurStory';
// import Faq from "../LandingPage/LandingPageComponents/FaQ/Faq"
const AboutUs = () => {
  return (
    <div className='AboutUsComponants'>
      <AboutUsIntroSection/>
      <OurStory/>
      <OurObjective/>
      {/* <Faq/> */}
      {/* <DonateNgoCard/> */}
      
    </div>
  )
}

export default AboutUs
