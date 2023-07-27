import { useState } from "react";
import "./AddNgoForm.css";
// import google from "./Image/google.png";
// import linkedin from "./Image/linkedin.png";
import buddha from "./Image/buddha.png";
// import logo from "./Image/login.png";
const AddNgoForm = () => {
  const [user, setUser] = useState({
    ngoname:"",
        ngoType:"",
        NgoAddress:"",
        ngodescription:"",
  });
  let name, value;
  const handleInput = (e)=>{
    console.log(e);
    name= e.target.name;
    value = e.target.value;
    setUser({...user, [name]:value})
  }
  const PostData = async (e) => {
    e.preventDefault();
    const { ngoname,
        ngoType,
        NgoAddress,
        ngodescription } = user;
    const res = await fetch("http://localhost:5002/registerAdmin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ngoname,
        ngoType,
        NgoAddress,
        ngodescription
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
            <h1 className="">Add NGO to CleanCloset</h1>
          </div>
          <div className=" w-full flex justify-center">
            <form method="POST">
              <div className="form-group mt-4">
                <input
                  type="text"
                  className="form-control"
                  value={user.name}
                  onChange={handleInput}
                  id="name"
                  name="name"
                  aria-describedby="emailHelp"
                  placeholder="Enter your name "
                />
              </div>
              <div className="form-group mt-4">
                <input
                  type="email"
                  className="form-control"
                  value={user.email}
                  onChange={handleInput}
                  id="emai"
                  name="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group mt-4">
                <input
                  type="number"
                  className="form-control"
                  value={user.phone}
                  onChange={handleInput}
                  id="phone"
                  name="phone"
                  aria-describedby="emailHelp"
                  placeholder="your phone number "
                />
              </div>
              <div className="form-group mt-4">
                <input
                  type="text"
                  className="form-control"
                  value={user.work}
                  onChange={handleInput}
                  id="work"
                  name="work"
                  aria-describedby="emailHelp"
                  placeholder="Enter you work"
                />
              </div>
              <div className="form-group mt-4">
                <input
                  type="password"
                  value={user.password}
                  onChange={handleInput}
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <div className="form-group mt-4">
                <input
                  type="password"
                  className="form-control"
                  value={user.cpassword}
                  onChange={handleInput}
                  id="cpassword"
                  name="cpassword"
                  placeholder="confirm Password"
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
  );
};

export default AddNgoForm;
