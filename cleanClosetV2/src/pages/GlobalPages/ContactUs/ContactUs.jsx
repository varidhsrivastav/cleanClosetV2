import { useRef } from "react";
import "./Contacts.css";
import chat from "./image/chat (1).png";
import location from "./image/location.png";
import call from "./image/phone-call.png";
import facebook from "./image/facebook.png";
import instagram from "./image/instagram.png";
import linkedin from "./image/linkedin-logo.png";
import DonateNgoCard from "../Footer/FooterComponants/DonateNgoCard/DonateNgoCrad";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d4qrocz",
        "template_zlzf9uh",
        form.current,
        "31o6VjHQL6fv5QHRc"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.alert("Succesfully shared ");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  // let yname, value;
  // const [contactdata, setContactData] = useState([]);
  // const handlecontactus = (e) => {
  //   console.log(e);
  //   yname = e.target.yname;
  //   value = e.target.value;
  //   setContactData({ ...yname, [yname]: value });
  // };
  // const handleInputs = (e) => {
  //   console.log(e);
  //   yname = e.target.name;
  //   value = e.target.value;

  //   setContactData({ ...yname, [yname]: value });
  // };
  // const PostData = async (e) => {
  //   e.preventDefault();
  //   const { yname, yemail, about } = contactdata;
  //   const res = await fetch("/contactUs", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       yname,
  //       yemail,
  //       about,
  //     }),
  //   });
  //   const data = await res.json();
  //   if (data.status === 422 || !data) {
  //     window.alert("invalid");
  //     console.log("invalid");
  //   } else {
  //     window.alert("valid");
  //     console.log("Send succesfully");
  //   }
  // };
  return (
    <div className="ContactUsMainContainer">
      <div className="ContactUSContainer">
        <div className="ContactUsLeftSideContainer">
          <div className="ContactUsLeftSideContainerBody">
            <div className="ContactUsLeftSideIcon">
              <img src={chat} alt="" />
            </div>
            <div className="ContactUsLeftSideContents">
              {/* {JSON.stringify(contactdata, undefined, 2)} */}
              <h5 className="py-2 font-extrabold text-xl text-orangePrimary ">
                Chat to us
              </h5>
              <p>Our friendly team is there to help</p>
              <h6>hi@cleancloset.com</h6>
            </div>
          </div>
          <div className="ContactUsLeftSideContainerBody">
            <div className="ContactUsLeftSideIcon">
              <img className=" bg-orageBack" src={location} alt="" />
            </div>
            <div className="ContactUsLeftSideContents">
              <h5 className="py-2 font-extrabold text-xl text-orangePrimary ">
                Visit us{" "}
              </h5>
              <p>Come say hello at our office HQ</p>
              <h6>
                100 World trade center, <br /> Bangalore, karnataka
              </h6>
            </div>
          </div>
          <div className="ContactUsLeftSideContainerBody">
            <div className="ContactUsLeftSideIcon">
              <img src={call} alt="" />
            </div>
            <div className="ContactUsLeftSideContents">
              <h5 className="py-2 font-extrabold text-xl text-orangePrimary">
                Call us{" "}
              </h5>
              <p>Mon-Fri from 8am to 5pm</p>
              <a href="tel:123-456-7890">
                <h5>+91 9565178122</h5>
              </a>
            </div>
          </div>
          <div className="ContactUsLeftSideContainerSocialIcon">
            <a href="https://www.facebook.com/varidhsrivastav/">
              <img className=" bg-orageBack" src={facebook} alt="" />
            </a>
            <a href="https://www.instagram.com/varidh_srivastav/">
              <img src={instagram} alt="" />
            </a>
            <a href="linkedin.com/in/varidh-srivastav-544b9b201">
              <img src={linkedin} alt="" />
            </a>
          </div>
        </div>
        <div className="ContactUsFormSideContainer">
          <div className="ContactUsFormSideContainerHeading">
            <h1 className="text-5xl font-extrabold pb-2 text-rrrpage">
              We'd love to hear from you
            </h1>
            <p>We have offices and team all around the world.</p>
          </div>
          <div className="ContactUsFormSideContainerForm">
            <form method="POST" onSubmit={sendEmail} ref={form}>
              <div className="ContactUsFormSideContainerFormInputF">
                <input type="text" placeholder="Your Name" name="to_name" />
              </div>{" "}
              <div className="ContactUsFormSideContainerFormInputF">
                <input
                  name="from_name"
                  type="email"
                  placeholder="example@email.com"
                />
              </div>{" "}
              <div className="ContactUsFormSideContainerFormInputF">
                <label htmlFor="">Tell us a little more </label>
                <textarea name="message" id="" cols="10" rows="3" />
              </div>
              {/* <div className="ContactUsFormSideContainerFormRadioButton">
                <p>You are a</p>
                <input
                  type="radio"
                  name="type"
                  id="ngo"
                  value="NGO"
                />
                <label htmlFor="ngo" className="button-1">
                  NGO
                </label>
                <input
                  type="radio"
                  name="type"
                  id="donor"
                  value="Donor"
                />
                <label htmlFor="donor" className="button-1">
                  Donor
                </label>
              </div> */}
              <div className="ContactUsSUbmitButton">
                <button type="submit" className="button-40 bg-black">
                  Lets get started
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <DonateNgoCard />
    </div>
  );
};

export default ContactUs;
