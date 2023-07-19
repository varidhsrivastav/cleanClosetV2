import React, { useContext } from 'react'
import { multiStepContext } from '../../DonationFormContext/DonationFormContext';
import "./Stage6.css";
import congratulation from "./image/55867-congratulation.gif"
const Stage6 = () => {
    const {setStep, currentStep} = useContext(multiStepContext);
  return (
    <div className='DoationBasicDetailFormRSideBody'>
        <h1>Thankyou for donating</h1>
<img src={congratulation} alt="" />
<div className="DonateTypeButons">
        <button className="button-85" >
          Go back to home
        </button>
        <button className="button-85" onClick={() => setStep(5)}>
          Go to Dashboard
        </button>
      </div>
    </div>
  )
}

export default Stage6