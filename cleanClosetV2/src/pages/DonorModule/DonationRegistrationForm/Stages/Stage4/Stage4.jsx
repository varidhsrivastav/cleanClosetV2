import React, { useContext, useState } from 'react'
import { multiStepContext } from '../../DonationFormContext/DonationFormContext';

import "./Stage4.css"
const Stage4 = () => {
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
    <div className='DoationBasicDetailFormRSideBody'>
      {JSON.stringify(userdata, undefined, 2)}
      <h1>Let Meet each other </h1>
      <div className="DoationBasicDetailFormRSideForm">
       
            <div className="DBDFinputFieldAddress">
                <div className="DBDFinputFieldsAline">
                <div className="DBDFinputFields">
                    <label htmlFor="">Addres Line 1</label>
                    <input type="text" name="addressLine1" id="AddressLine1" placeholder='Flat No, Floor No, street '
                      value={userdata["addressLine1"]}
                onChange={(e) => {
                  setUserData({ ...userdata,AddressLine1: e.target.value });
                }}
                    />
                </div>
                <div className="DBDFinputFields">
                    <label htmlFor="">Addres Line 2</label>
                    <input type="text" name="addressLine2" id="AddressLine2" placeholder='LandMark'
                        value={userdata["addressLine2"]}
                onChange={(e) => {
                  setUserData({ ...userdata,AddressLine2: e.target.value });
                }}
                    />
                </div>
                </div>
                <div className="DBDFinputFieldsAlineStates">
                <div className="DBDFinputFields">
                    <label htmlFor="">State</label>
                    <input type="text" name="state" id="city" placeholder='Uttar Pradesh'
                        value={userdata["state"]}
                onChange={(e) => {
                  setUserData({ ...userdata, state: e.target.value });
                }}
                    />
                </div>
                <div className="DBDFinputFields">
                    <label htmlFor="">City</label>
                    <input type="text" name="city" id="city" placeholder='Varanasi'
                        value={userdata["city"]}
                onChange={(e) => {
                  setUserData({ ...userdata, city: e.target.value });
                }}
                    />
                </div>
                </div>
                <div className="DBDFinputFieldsAlineStates">
                <div className="DBDFinputFields">
                    <label htmlFor="">Country</label>
                    <input type="text" name="country" id="country" placeholder='India'
                        value={userdata["country"]}
                onChange={(e) => {
                  setUserData({ ...userdata, country: e.target.value });
                }}
                    />
                </div>
                <div className="DBDFinputFields">
                    <label htmlFor="">Pincode</label>
                    <input type="number" name="pinCode" id="pinCode" placeholder='221401'
                        value={userdata["pinCode"]}
                onChange={(e) => {
                  setUserData({ ...userdata,pinCode: e.target.value });
                }}
                    />
                </div>
                </div>
            </div>
   
      </div>
      <div className="DonateTypeButons">
        <button className="button-85" onClick={() => setStep(3)}>
          previous
        </button>
        <button className="button-85" onClick={() => setStep(5)}>
          Next
        </button>
      </div>
    </div>
  )
}

export default Stage4
