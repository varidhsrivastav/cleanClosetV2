import React, { useContext } from 'react'
import { multiStepContext } from '../../DonationFormContext/DonationFormContext';




const Stage5 = () => {
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
    date,  setDate , datevar
  } = useContext(multiStepContext);
  new Date()
  // const todaysdate = new Date().toLocaleString("en-US", { day : '2-digit'} , )
  const tomorowdate = new Date((+new Date() + 86400000)).toLocaleString("en-US", { day : '2-digit'} , )
  const theeretomorowdate = new Date((+new Date() + (2*86400000))).toLocaleString("en-US", { day : '2-digit'} , )
  const threetomorowdate = new Date((+new Date() + (4*86400000))).toLocaleString("en-US", { day : '2-digit'} , )
  const fourthdate = new Date((+new Date() + (6*86400000))).toLocaleString("en-US", { day : '2-digit'} , )
  const month = new Date().toLocaleString("en-US", { month: "short" })

  // const showtimeSlot=()=>{
  //     setModal(!timeslot);
  //     console.log("clicked");
  // }
  // if (timeslot) {
  //   document.body.classList.add("active-timeslot");
  //   console.log("clicke2");
  // } else {
  //   document.body.classList.remove("active-timeslot");
  //   console.log("clicke3");
  // }
  return (
    <div className='DoationBasicDetailFormRSideBody'>
    {JSON.stringify(userdata, undefined, 2)}
      <h1>A little help in delivery</h1>
      <div className="DoationBasicDetailFormRSideForm">
      
        <div className="DBDFinputFields">
            <label>Please select date of pickup</label>
            <div className="DBDFinputFieldsRadio">
              <input type="radio" name="dateOfPickup" id="Day1" 
                value={tomorowdate}
              onChange={(e) => {
                setUserData({ ...userdata, dateOfPickup: e.target.value });
                handleInputs();
              }}
              />
              <label htmlFor="Day1" className="Yes" >
                {tomorowdate}
                {month}
             
              </label>
             
              <input type="radio" name="dateOfPickup" id="Day2" 
                  value={theeretomorowdate}
              onChange={(e) => {
                setUserData({ ...userdata, dateOfPickup: e.target.value });
                handleInputs();
              }}
              />
              <label htmlFor="Day2" className="No">
              {theeretomorowdate}
              {month}
              </label>
              <input type="radio" name="dateOfPickup" id="Day3" 
                  value={threetomorowdate}
              onChange={(e) => {
                setUserData({ ...userdata, dateOfPickup: e.target.value });
                handleInputs();
              }}
              />
              <label htmlFor="Day3" className="No">
              {threetomorowdate}
              {month}
              </label>
              <input type="radio" name="dateOfPickup" id="Day4"
                value={fourthdate}
              onChange={(e) => {
                setUserData({ ...userdata, dateOfPickup: e.target.value });
                handleInputs();
              }} />
              <label htmlFor="Day4" className="No">
              {fourthdate}
              {month}
              </label>
            </div>
          </div>
      </div>
      <div className="DonateTypeButons">
        <button className="button-85" onClick={() => setStep(4)}>
          previous
        </button>
        <button className="button-85" type='submit' onClick={() => setStep(6)}>
          Submit
        </button>
      </div>
    </div>
  )
}

export default Stage5



