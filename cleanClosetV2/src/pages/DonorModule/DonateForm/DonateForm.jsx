import { useState } from "react";
import buddha from "./Image/buddha.png"

const DonateForm = () => {
    const [donated, setdoantedItem] = useState({
        donorName: "",
        donorEmail: "",
        donorPhone:"",
        donorAddress:"",
        typeofcloth:"",
        quantity:"",
        condition:"",
        additionalDetails:""
  });
  let name, value;
  const handleInput = (e)=>{
    console.log(e);
    name= e.target.name;
    value = e.target.value;
    setdoantedItem({...donated, [name]:value})
  }
  const PostData = async (e) => {
    e.preventDefault();
    const { donorName, donorEmail,donorPhone, donorAddress, typeofcloth, quantity, condition, additionalDetails, } = donated;
    const res = await fetch("http://localhost:5002/donateItem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        donorName, donorEmail,donorPhone, donorAddress, typeofcloth, quantity, condition, additionalDetails,
      }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("invalid");
      console.log("invalid");
    } else {
      window.alert("valid");
      console.log("valid");
    }
  };
  return (
    <div className="DonationSignupFormMainComponants">
      <div className="DonationSignupFormComponants">
        <div className="DsFLeftSide">
          <div className="DsFleftSideContent">
            <h1 className="text-6xl text-rrrpage  font-extrabold">Please Fill the  form to Donate</h1>
          </div>
          <div className=" w-full flex justify-center">
            <form method="POST">
              <div className="form-group mt-4">
                <input
                  type="text"
                  className="form-control"
                  value={donated.donorName}
                  onChange={handleInput}
                  id="donorName"
                  name="donorName"
                  aria-describedby="emailHelp"
                  placeholder="Please Enter your name "
                />
              </div>
              <div className="form-group mt-4">
                <input
                  type="email"
                  className="form-control"
                  value={donated.donorEmail}
                  onChange={handleInput}
                  id="donorEmail"
                  name="donorEmail"
                  aria-describedby="emailHelp"
                  placeholder="Please Enter your email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group mt-4">
                <input
                  type="number"
                  className="form-control"
                  value={donated.donorPhone}
                  onChange={handleInput}
                  id="donorPhone"
                  name="donorPhone"
                  aria-describedby="emailHelp"
                  placeholder="Please your phone number "
                />
              </div>
              <div className="form-group mt-4">
                <input
                  type="text"
                  className="form-control"
                  value={donated.donorAddress}
                  onChange={handleInput}
                  id="donorAddress"
                  name="donorAddress"
                  aria-describedby="emailHelp"
                  placeholder="Please Enter Your Address"
                />
                <small id="emailHelp" className="form-text text-muted">
                  please enter you full Address
                </small>
              </div>
              <div className="form-group mt-4">
                <input
                  type="text"
                  value={donated.typeofcloth}
                  onChange={handleInput}
                  className="form-control"
                  id="typeofcloth"
                  name="typeofcloth"
                  placeholder="Please Enter your type of cloth"
                />
              </div>
              <div className="form-group mt-4">
                <input
                  type="text"
                  className="form-control"
                  value={donated.quantity}
                  onChange={handleInput}
                  id="quantity"
                  name="quantity"
                  placeholder="please enter the quantity of cloths "
                />
                <small id="emailHelp" className="form-text text-muted">
                  in kg 
                </small>
              </div>
              <div className="form-group mt-4">
                <input
                  type="text"
                  className="form-control"
                  value={donated.condition}
                  onChange={handleInput}
                  id="condition"
                  name="condition"
                  placeholder="Mention the condition of you cloths"
                />
                <small id="emailHelp" className="form-text text-muted">
                  EXCELLENT, GOOD, BAD 
                </small>
              </div>
              <div className="form-group mt-4">
                <textarea
                  type="text"
                  className="form-control"
                  value={donated.additionalDetails}
                  onChange={handleInput}
                  id="additionalDetails"
                  name="additionalDetails"
                  placeholder="Please provide any extra details "
                />
              </div>

              <input
                type="submit"
                name="signu["
                className="button-40 btn btn-primary bg-dark-purple mt-5 w-max"
                value="submit"
                onClick={PostData}
              />
            </form>
          </div>
        </div>

        <div className="DsFRightSide">
          <div className="DsFRightSideContent">
            <h2>
              “Before giving, the mind of the giver is happy; while giving, the
              mind of the giver is made peaceful; and having given, the
              <br /> mind of the giver is uplifted.”
            </h2>
            <p>-Gautam Buddha</p>
          </div>
          <div className="DsFRigthSideContentImage">
            <img src={buddha} alt="" />
          </div>
          <div className="TermAndCondition">
            <p>
              By signing up you agree to CleanCloset
              <a href="/">Terms of service and Privacy policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DonateForm
