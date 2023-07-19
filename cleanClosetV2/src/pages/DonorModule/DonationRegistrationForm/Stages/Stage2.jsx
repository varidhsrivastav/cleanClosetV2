import React from "react";
import { useContext } from "react";
import { multiStepContext } from "../DonationFormContext/DonationFormContext";
import "./Stage2.css";
import bike from "./Image/food-delivery.png";
import truck1 from "./Image/truck (1).png";
import truck2 from "./Image/truck.png";
import ngo from "./Image/ngo.png"
const Stage2 = () => {
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
      <h1>HOW DO YOU WISH TO DONATE?</h1>
      <div className="DonateTypeContainer">
        <div className="DonateTypeContainerT1">
          <h3>Pickup from Doorstep</h3>
          <div className="DonateTypeContainerT1Radio">
            <input type="radio" name="PickupT1" id="TwoWheel" 
              value="twoWheel"
              onChange={(e) => {
                setUserData({ ...userdata, pickupService: e.target.value });
                handleInputs();
              }}
            />{" "}
            <label
              htmlFor="TwoWheel"
              className="DonateTypeContainerT1RadioLabel"
            >
              <div className="DonateTypeContainerT1RadioIcon">
                <img src={bike} alt="" />
              </div>
              <div className="DonateTypeContainerT1RadioContent">
                <h5>Light Pickup (Via 2-wheeler)</h5> (For small items - 1 bag)
              </div>
            </label>
            <input type="radio" name="PickupT1" id="Mth" 
              value="fourWheeler"
              onChange={(e) => {
                setUserData({ ...userdata, pickupService: e.target.value });
                handleInputs();
              }}
            />{" "}
            <label htmlFor="Mth" className="DonateTypeContainerT1RadioLabel">
              <div className="DonateTypeContainerT1RadioIcon">
                <img src={truck1} alt="" />
              </div>
              <div className="DonateTypeContainerT1RadioContent">
                <h5>Medium to heavy pickup</h5> (For medium to heavy volume)
              </div>
            </label>
            <input type="radio" name="PickupT1" id="Drive"
            value="Truck"
              onChange={(e) => {
                setUserData({ ...userdata, pickupService: e.target.value });
                handleInputs();
              }} />{" "}
            <label htmlFor="Drive" className="DonateTypeContainerT1RadioLabel">
              <div className="DonateTypeContainerT1RadioIcon">
                <img src={truck2} alt="" />
              </div>
              <div className="DonateTypeContainerT1RadioContent">
                <h5>Collection Drive Pickup</h5> (For Group donation)
              </div>
            </label>
          </div>
        </div>
        {/* <div className="DonateTypeContainerT2">
          <h3>Live Campaigns</h3>
          <div className="DonateTypeContainerT2Radio">
          <input type="radio" name="PickupT2" id="Drive1" />{" "}
            <label htmlFor="Drive1" className="DonateTypeContainerT2RadioLabel">
              <div className="DonateTypeContainerT2RadioIcon">
                <img src={ngo} alt="" />
              </div>
              <div className="DonateTypeContainerT2RadioContent">
                <h5>Muskurahat Foundation Drive</h5> 
              </div>
            </label>
            <input type="radio" name="PickupT2" id="Drive2" />{" "}
            <label htmlFor="Drive2" className="DonateTypeContainerT2RadioLabel">
              <div className="DonateTypeContainerT2RadioIcon">
                <img src={ngo} alt="" />
              </div>
              <div className="DonateTypeContainerT2RadioContent">
                <h5>Asamaan Foundation Drive</h5> 
              </div>
            </label>
            <input type="radio" name="LiveFound" id="Drive1" />{" "}
          </div>
        </div> */}
      </div>
      <div className="DonateTypeButons">
      <button className="button-85" onClick={() => setStep(1)}>previous</button>
      <button className="button-85" onClick={() => setStep(3)}>Next</button>
      </div>
    </div>
  );
};

export default Stage2;
