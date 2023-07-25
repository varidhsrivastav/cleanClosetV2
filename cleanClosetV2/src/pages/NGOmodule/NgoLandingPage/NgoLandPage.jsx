import NgoFooter from "./NgoLandPageComp/NgoFooter/NgoFooter"
import NgoHeroPage from "./NgoLandPageComp/NgoHeroPage"
import Partners from "./NgoLandPageComp/Partners/Partners"
import ThreeFact from "./NgoLandPageComp/ThreeFact/ThreeFact"
import WhyCC from "./NgoLandPageComp/WhyCleanCloset/WhyCC"

const NgoLandPage = () => {
  return (
    <div className=" ">
      <NgoHeroPage/>
      <Partners/>
      <WhyCC/>
      <ThreeFact/>
      <NgoFooter/>
    </div>
  )
}

export default NgoLandPage
