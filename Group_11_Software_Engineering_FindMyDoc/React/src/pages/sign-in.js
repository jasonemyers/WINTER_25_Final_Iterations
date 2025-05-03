import React, { useState } from 'react';                        // React core + hook
import { useNavigate, Link } from 'react-router-dom';           // routing helpers
import '../styles.css';                                         // global styles

// Assets
import iconsMedical from '../assets/icons8-medical-50_1icons8-medical-50.png';    // medical icon
import iconsAccount from '../assets/icons8-account-50_1icons8-account-50.png';   // account icon
import ctaBanner from '../assets/CTA-banner.jpg';                                // CTA banner
import ctaBottomVector from '../assets/CTA-bottom-pluse-vector.svg';             // bottom vector
import ctaTopEllipse from '../assets/CTA-top-ellipse-shape.svg';                 // top ellipse
import authBanner from '../assets/authentication--banner.jpg';                   // auth banner
import insideVectorSemiSmall from '../assets/Inside-vector-semi-small.svg';      // decorative vector
import insideVectorSmall from '../assets/Inside-vector-small.svg';               // decorative vector
import insideVectorMedium from '../assets/Inside-vector-medium.svg';             // decorative vector
import insideVectorLarge from '../assets/Inside-vector-large.svg';               // decorative vector
import insideVectorSemiLarge from '../assets/Inside-vector-semi-large.svg';      // decorative vector
import outsideVectorLarge from '../assets/Outside-vector-large.svg';             // background vector
import Header from '../components/header';                                        // page header
import Footer from '../components/footer';                                        // page footer

export default function SignIn() {
  const navigate = useNavigate();                                // navigation hook

  // form submit handler
  const handleSignIn = async (event) => {
    event.preventDefault();                                      // prevent default submit

    // grab inputs via selector
    const emailInput = document.querySelector("#Email-Address");
    const passwordInput = document.querySelector("#Password");

    const email = emailInput ? emailInput.value.trim() : '';     // get email value
    const password = passwordInput ? passwordInput.value.trim() : ''; // get password

    if (!email || !password) {
      alert("Please enter both email and password.");            // require both fields
      return;
    }

    try {
      // send login request
      const response = await fetch(
        "https://findmydocmain-production.up.railway.app/api/auth/local",
        {
          method: "POST",                                         // POST request
          headers: { "Content-Type": "application/json" },        // JSON headers
          body: JSON.stringify({ identifier: email, password }),  // payload
        }
      );

      const data = await response.json();                        // parse response

      if (!response.ok) {
        throw new Error(data.message || "Login failed. Please try again."); // error handling
      }

      // save credentials
      localStorage.setItem("jwt", data.jwt);                     // store token
      localStorage.setItem("user", JSON.stringify(data.user));    // store user info

      navigate("/");                                             // redirect on success
    } catch (error) {
      console.error("Error:", error);                            // log errors
      alert(error.message);                                      // user feedback
    }
  };

  return (
    <div className="signInPage">                                {/* page wrapper */}
      <Header />                                                {/* header */}

      {/* Breadcrumb Section */}
      <section className="breadcrumb-section-signin">
        <div className="w-layout-blockcontainer doctors-container w-container">
          <div className="breadcrumb-wrapper">
            <div className="breadcrumb-title-block">
              <h1 className="breadcumb-title">Sign-In</h1>      {/* page title */}
              <div className="home-page-back-link-wrap">
                <a href="#" className="page-link">Home</a>      {/* home link */}
                <div className="divider">/</div>               {/* separator */}
                <div className="page-name">Sign-In</div>       {/* current page */}
              </div>
            </div>
            <div className="breadcrumb-shape-block">
              <div className="inside-vector-wrap">             {/* inner vectors */}
                <img src={insideVectorSemiSmall} loading="lazy" alt="Vector" className="inside-vector-semi-small" />
                <img src={insideVectorSmall}      loading="lazy" alt="Vector" className="inside-vector-small" />
                <img src={insideVectorMedium}     loading="lazy" alt="Vector" className="inside-vector-medium" />
                <img src={insideVectorLarge}      loading="lazy" alt="Vector" className="inside-vector-large" />
                <img src={insideVectorSemiLarge}  loading="lazy" alt="Vector" className="inside-vector-semi-large" />
              </div>
            </div>
          </div>
        </div>
        <img src={outsideVectorLarge} loading="lazy" alt="Vector" className="outside-vector-large" /> {/* outer vector */}
      </section>
      {/* Breadcrumb End */}

      {/* Sign-In Form */}
      <div className="main-wrapper sign-in-wrapper">            {/* form container */}
        <section className="authentication-section position-absolute d-flex">
          <div className="w-layout-blockcontainer doctors-container position-absolute w-container">
            <div className="authentication-form-wrapper">
              <div className="authentication-content-wrap">
                <div className="authentication-title-wrap">
                  <h1 className="authentication-title">Login to Your Account</h1> {/* form title */}
                  <div className="authentication-sub-title">Enter your details to continue</div> {/* subtitle */}
                </div>

                {/* input form */}
                <div className="validation-input-form-wrap">
                  <div className="validation-input-form-block w-form">
                    <form className="validation-input-form">
                      <label htmlFor="Email-Address" className="validation-input-field-level">
                        Email Address                                    {/* email label */}
                      </label>
                      <input
                        id="Email-Address"                             // email input
                        className="varidation-form-text-field w-input"
                        type="email"
                        placeholder="Enter your email"
                        required
                      />
                      <label htmlFor="Password" className="validation-input-field-level">
                        Password                                         {/* password label */}
                      </label>
                      <input
                        id="Password"                                   // password input
                        className="varidation-form-text-field w-input"
                        type="password"
                        placeholder="Password"
                        required
                      />
                      <div className="login-condition-block">          {/* signup prompt */}
                        <div className="login-conditon-title">Don't have an account?</div>
                        <Link to="/sign-up" className="register-link">Register</Link>
                      </div>
                      <button
                        id="signin-btn"
                        className="button-primary text-center w-button"
                        onClick={handleSignIn}                        {/* submit handler */}
                      >
                        Sign In                                       {/* button text */}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* auth side banner */}
          <div className="authentication-banner">
            <img
              src={authBanner}                                 // banner image
              loading="lazy"
              alt="Authentication Banner"
              className="authentication-banner-image"
            />
          </div>
        </section>
      </div>
      {/* Sign-In Form End */}

      {/* CTA Section */}
      <section className="cta-section padding-bottom-140px">
        <div className="w-layout-blockcontainer doctors-container w-container">
          <div className="cta-wrapper center">
            <div className="cta-banner-image-wrap">
              <img
                src={ctaBanner}                                // CTA banner
                loading="lazy"
                alt="CTA Banner"
                className="cta-banner-image"
              />
            </div>

            <div className="cta-content-wrap">
              <h2 className="cta-section-title cta">       {/* CTA text */}
                View doctor reviews and share your own.
              </h2>
              <div className="button-primary-wrap">
                <a href="doctors.html" className="button-primary white w-button">VIEW ALL</a> {/* CTA link */}
              </div>
              <img src={ctaBottomVector} loading="lazy" alt="Vector" className="cta-vector-shape" /> {/* bottom vector */}
              <img src={ctaTopEllipse}   loading="lazy" alt="Ellipse Shape" className="cta-ellipse-shape" /> {/* top ellipse */}
            </div>
          </div>
        </div>
      </section>
      {/* CTA End */}

      <Footer />                                               {/* footer */}
    </div>
  );
}
