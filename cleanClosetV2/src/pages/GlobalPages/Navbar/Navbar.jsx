// import React from 'react'
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "./Image/cleanclosethighLogo.png";
import { useAuth0 } from "@auth0/auth0-react";

export const Navbar = () => {
  const { user, isAuthenticated, isLoading, logout, loginWithRedirect } = useAuth0();
  var openNav = () => {
    var lastScrollTop = 0;
    var navbar = document.getElementById("navbar");
    window.addEventListener("scroll", function () {
      var scrollTop = window.pageYOffset || document.createElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        navbar.style.top = "80px";
      } else {
        navbar.style.top = "0";
      }
      lastScrollTop = scrollTop;
    });
  };

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light" onScroll={openNav}>
        <div className="container" data-aos="fade-down">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collaps navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item text-white">
                <Link to="/" className="nav-link">
                  <span data-hover="Home">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/ngo" className="nav-link">
                  <span data-hover="Ngo">Add Ngo</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  <span data-hover="Ngo">About</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/donor" className="nav-link">
                  <span data-hover="donate">Donate</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  <span data-hover="contact">Contact</span>
                </Link>
              </li>
              <li className="nav-item">
              {
              (isAuthenticated &&
              <Link to="/donor/dash">
                Dashboard
              </Link>
              )
              }
              </li>
            </ul>

            <ul className="navbar-nav ml-lg-5">
              <Link to="/ngo" className="nav-link">
                  <button className="button-40" role="button">
                    Add Ngo
                  </button>
              </Link>
              {!isAuthenticated ? <button  className="button-40" onClick={() => loginWithRedirect(window.location.origin === "/DonorLandingPage/timeline/signup/reg")}>Log in</button>:<button  className="button-40" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
