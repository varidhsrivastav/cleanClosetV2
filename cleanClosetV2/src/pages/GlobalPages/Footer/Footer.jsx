// import React from "react";
import "./Footer.css";
import call from "./FooterComponants/img/call.png";
import email from "./FooterComponants/img/message.png";
import footerImage from "./image/myProfileFooter_4e9fe2.png";
import logo from "./image/cleanclosethighLogo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="FooterMainContainer pt-10">
      <div className="FooterComponants container">
        <p>Contact our volenteers and join the Clean Closet </p>
        <div className="FooterContactSections  ">
          <a className="FooterCall">
            <img src={call} alt="" />
            <h3>+91 956 517 1812</h3>
          </a>
          <a href="" className="FooterEmail">
            <img src={email} alt="" />
            <h3>help@cleancloset.com</h3>
          </a>
        </div>
        <hr />
        <div className="FooterMainSectionComponants">
          <div className="FooterMainSectionNavigation">
            <div className="FooterMainSectionNavigationLogo">
              <img src={logo} alt="" />
            </div>
            <div className="FooterMainSectionNavigationSections">
              <a href="">
                <h6>About Us</h6>
              </a>
              <a href="">
                <h6>Contact Us</h6>
              </a>

              <a href="">
                <h6>Add Ngo </h6>
              </a>
            </div>
            <div className="FooterMainSectionNavigationBotton">
            <Link to="/ngo">

              <button className="DonateButton" role="button">
                Add Ngo
              </button>
            </Link>
            </div>
          </div>
          <div className="CleanClosetSummeryFooter">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            minus, vel quod numquam est aspernatur quo sit nisi. Error, a! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quam earum sequi
            vitae deserunt harum. Beatae harum eligendi quaerat! Deleniti,
            officia?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Pariatur vero eos impedit, laboriosam adipisci ex velit neque
            asperiores ad! Nobis.
          </div>
          <div className="CleanClosetCopyrightFooter">
            <a href="">@2023 copyright CleanCloset</a>
            <div className="PolicyLinksandcookies">
              <a href="" className="PrivacyPolicy">
                Privacy Policy
              </a>
              <a href="" className="Cookies">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footerImageDown">
        <img src={footerImage} alt="" />
      </div>
    </div>
  );
};

export default Footer;
