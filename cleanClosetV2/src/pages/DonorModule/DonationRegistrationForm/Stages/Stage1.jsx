import React, { useState } from "react";
import { useContext } from "react";
import { multiStepContext } from "../DonationFormContext/DonationFormContext";
import "./Stage1.css";
import "../DonationRegistration.css"
import verify from "./Image/pin.png";

const Stage1 = () => {
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
    InfectionType
  } = useContext(multiStepContext);
  const [modal, setModal] = useState(false);
// const infection = ["Yes", "no"];
  const toggleModal = () => {
    setModal(!modal);
    console.log("clicked");
  };

  if (modal ) {
    document.body.classList.add("active-modal");
    console.log("clicke2");
  } else {
    document.body.classList.remove("active-modal");
    console.log("clicke3");
  }

  return (
    <div className="DoationBasicDetailFormRSideBody">
      <h1>Tell us a little bit more about yourself</h1>
      <div className="DoationBasicDetailFormRSideForm">
        {JSON.stringify(userdata, undefined, 2)}
        <div className="DBDFinputFields">
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="on"
            required
            value={userdata["name"]}
            onChange={(e) => {
              setUserData({ ...userdata, name: e.target.value });
            }}
          />
        </div>
        <p className="Error">{errors.name}</p>
        <div className="DBDFinputFields">
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="on"
            value={userdata["email"]}
            onChange={(e) => {
              setUserData({ ...userdata, email: e.target.value });
            }}
            placeholder="you@example.com"
          />
        </div>
        <div className="DBDFinputFields">
          <label htmlFor="">Phone number</label>
          <div className="MobileOtpVerifyButton">
            <input
              type="number"
              placeholder="+91 909 090 9090"
              value={userdata["phone"]}
              onChange={(e) => {
                setUserData({ ...userdata, phone: e.target.value });
              }}
            />
            <div className="VrifyButton">
              <a class="button-48" onClick={toggleModal}>
                <span class="text">Send Otp</span>
              </a>
            </div>
          </div>
          <p className="Error">{errors.phone}</p>
        </div>
        <div className="DBDFinputFields">
          <label htmlFor="">Gender</label>
          <div className="DBDFGender">
            <input
              type="radio"
              name="gender"
              id="Male"
              //  checked={userdata==="male"}
              value="male"
              onChange={(e) => {
                setUserData({ ...userdata, gender: e.target.value });
                handleInputs();
              }}
            />
            <label htmlFor="Male" className="Male">
              Male
            </label>
            <input
              type="radio"
              name="gender"
              id="Female"
              value="Female"
              onChange={(e) => {
                setUserData({ ...userdata, gender: e.target.value });
                handleInputs();
              }}
            />
            <label htmlFor="Female" className="Female">
              Female
            </label>
            <input
              type="radio"
              name="gender"
              id="Bisexual"
              value="Bisexual"
              onChange={(e) => {
                setUserData({ ...userdata, gender: e.target.value });
                handleInputs();
              }}
            />
            <label htmlFor="Bisexual" className="Bisexual">
              Bisexual
            </label>
          </div>
        </div>
        <div className="DBDFinputFields">
          <label htmlFor="">Are you having any type of skin infection</label>

          {InfectionType.map((value,index)=>{
            return(
              <div className="DBDFinputFieldsRadio" key={index}>
            <input
              type="radio"
              name="infection"
              id={value}
              value={value}
              onChange={(e) => {
                setUserData({ ...userdata, infection: e.target.value });
                handleInputs();
                setInfextionType(e.target.value);
              }}
            />
            <label htmlFor={value} className={value}>
              {value}
            </label>
            </div>
            );
          })}
        </div>
        {infectionType === "Yes" ? (
          <div className="DBDFinputFields infectionInputField">
            <label htmlFor="">Please Specify the Infection type</label>
            <input type="text" placeholder="Serocise" 
               value={userdata["infectionName"]}
              onChange={(e) => {
                setUserData({ ...userdata, infectionName: e.target.value });
              }}
            />
          </div>
        ) : null}

        <div className="DBDFSubmitbuttons">
          <button onClick={postData}>submt</button>
          <button class="button-85" role="button" onClick={() => setStep(2)}>
            Next
          </button>
        </div>
      </div>
      {modal && (
        <div className="DBDFVerifyModalContainer">
          <div className="DBDFVerifyModalBody">
            <div className="DBDFVerifyModalBoady">
              <div className="DBDFVerifyModalHeading">
                <h3>Verify Your Otp</h3>
              </div>
              <div className="DBDFVerifyModalImage">
                <img src={verify} alt="" />
              </div>
              <div className="DBDFVerifyModalInputField">
                <form action="">
                  <div className="DBDFVerifyModalInputFieldForm">
                    <label htmlFor="">Enter otp</label>
                    <input type="number" />
                  </div>
                </form>
              </div>
              <div className="DBDFVerifyModalButton">
                <button className="button-85">verify</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Stage1;
