import React, { useContext } from "react";
import { multiStepContext } from "../../DonationFormContext/DonationFormContext";
import "./Stage3.css";

const Stage3 = () => {
  const {
    currentStep,
    setStep,
    userdata,
    setUserData,
    handleInputs,
    postData,
    finalData,
    setFinalData,
    errors,
    seterrors,
    submit,
    setissubmit,
    infectionType,
    setInfextionType,
    InfectionType,
  } = useContext(multiStepContext);
  
  return (
    <div className="DoationBasicDetailFormRSideBody">
      {JSON.stringify(userdata, undefined, 2)}
      <h1>Tell us about you clothes</h1>
      <div className="DoationBasicDetailFormRSideForm">
     
          <div className="DBDFinputFields">
            <label htmlFor="">Total Number of clothes</label>
            <div className="MobileOtpVerifyButton">
              <input
                type="number"
                name="NumberOfCloth" 
                id="NumberOfCloth"
                placeholder="5"
                value={userdata["NumberOfCloths"]}
                onChange={(e) => {
                  setUserData({ ...userdata, NumberOfCloths: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="DBDFinputFields">
            <label htmlFor="">Total Weight of cloths</label>
            <div className="MobileOtpVerifyButton">
              <input
                type="text"
                name="weightOfCloths"
                id="weightOfCloths"
                placeholder="5kg"
                value={userdata["weightOfCloths"]}
                onChange={(e) => {
                  setUserData({ ...userdata, weightOfCloths: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="DBDFinputFields">
            <label htmlFor="">How old are your clothes</label>
            <div className="DBDFinputFieldsRadio">
              <input
                type="radio"
                name="UsedDuration"
                id="5Months"
                value="5month"
                onChange={(e) => {
                  setUserData({
                    ...userdata,
                    durationOfCloths: e.target.value,
                  });
                  handleInputs();
                }}
              />
              <label htmlFor="5Months" className="Yes">
                {" "}
                &#60; 5 months
              </label>
              <input
                type="radio"
                name="UsedDuration"
                id="15Months"
                value="15month"
                onChange={(e) => {
                  setUserData({
                    ...userdata,
                    durationOfCloths: e.target.value,
                  });
                  handleInputs();
                }}
              />
              <label htmlFor="15Months" className="No">
                &gt; 6 months and &lt; 1.5 years
              </label>
              <input
                type="radio"
                name="UsedDuration"
                id="25Months"
                value="25month"
                onChange={(e) => {
                  setUserData({
                    ...userdata,
                    durationOfCloths: e.target.value,
                  });
                  handleInputs();
                }}
              />
              <label htmlFor="25Months" className="No">
                &gt; 1.5 years and &lt; 2.5 years
              </label>
              <input
                type="radio"
                name="UsedDuration"
                id="35Months"
                value="35month"
                onChange={(e) => {
                  setUserData({
                    ...userdata,
                    durationOfCloths: e.target.value,
                  });
                  handleInputs();
                }}
              />
              <label htmlFor="35Months" className="No">
                &gt; 2.5 years{" "}
              </label>
            </div>
          </div>

          <div className="DBDFinputFields">
            <label htmlFor="">How old are your clothes</label>
            <div className="DBDFinputFieldsRadio">
              <input
                type="radio"
                name="UsedCondition"
                id="New"
                value="New"
                onChange={(e) => {
                  setUserData({
                    ...userdata,
                    conditionOfCloths: e.target.value,
                  });
                  handleInputs();
                }}
              />
              <label htmlFor="New" className="No">
                {" "}
                Best (In new condition)
              </label>
              <input
                type="radio"
                name="UsedCondition"
                id="Medium"
                value="Good"
                onChange={(e) => {
                  setUserData({
                    ...userdata,
                    conditionOfCloths: e.target.value,
                  });
                  handleInputs();
                }}
              />
              <label htmlFor="Medium" className="No">
                Good (Some torns only )
              </label>
              <input
                type="radio"
                name="UsedCondition"
                id="Average"
                value="Average"
                onChange={(e) => {
                  setUserData({
                    ...userdata,
                    conditionOfCloths: e.target.value,
                  });
                  handleInputs();
                }}
              />
              <label htmlFor="Average" className="No">
                Average (Patchs and holes in cloth)
              </label>
              <input
                type="radio"
                name="UsedCondition"
                id="Worst"
                value="Worst"
                onChange={(e) => {
                  setUserData({
                    ...userdata,
                    conditionOfCloths: e.target.value,
                  });
                  handleInputs();
                }}
              />
              <label htmlFor="Worst" className="Yes">
                Only for recyle
              </label>
            </div>
          </div>
    
      </div>
      <div className="DonateTypeButons">
        <button className="button-85" onClick={() => setStep(2)}>
          previous
        </button>
        <button className="button-85" onClick={() => setStep(4)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Stage3;
