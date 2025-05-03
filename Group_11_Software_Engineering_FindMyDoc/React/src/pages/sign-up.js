import React, { useState, useEffect } from 'react';              // React core + hooks
import { useNavigate, Link } from 'react-router-dom';            // routing helpers
import '../styles.css';                                          // global styles

// Assets 
import iconsMedical from '../assets/icons8-medical-50_1icons8-medical-50.png';  // medical icon
import iconsAccount from '../assets/icons8-account-50_1icons8-account-50.png'; // account icon
import ctaBanner from '../assets/CTA-banner.jpg';               // CTA banner image
import ctaBottomVector from '../assets/CTA-bottom-pluse-vector.svg'; // bottom vector
import ctaTopEllipse from '../assets/CTA-top-ellipse-shape.svg';      // top ellipse
import authBanner from '../assets/authentication--banner.jpg';   // auth page banner
import insideVectorSemiSmall from '../assets/Inside-vector-semi-small.svg'; // decorative vectors
import insideVectorSmall from '../assets/Inside-vector-small.svg';
import insideVectorMedium from '../assets/Inside-vector-medium.svg';
import insideVectorLarge from '../assets/Inside-vector-large.svg';
import insideVectorSemiLarge from '../assets/Inside-vector-semi-large.svg';
import outsideVectorLarge from '../assets/Outside-vector-large.svg';    // outside vector
import Header from '../components/header';                         // header component
import Footer from '../components/footer';                         // footer component

export default function SignUp() {
  const [password, setPassword] = useState('');                   // password state
  const [showAgreement, setShowAgreement] = useState(false);      // toggle user agreement
  const [passwordValidation, setPasswordValidation] = useState({  // validation flags
    length: false,
    number: false,
    uppercase: false,
    specialChar: false
  });
  const navigate = useNavigate();                                 // navigate hook

  // open agreement popup
  const openUserAgreement = e => {
    e.preventDefault();                                           // prevent link default
    setShowAgreement(true);                                       // show popup
  };

  // close agreement popup
  const closeUserAgreement = () => {
    setShowAgreement(false);                                      // hide popup
  };

  // password strength checker
  const validatePassword = pwd => {
    const validations = {
      length: pwd.length >= 8,                                    // min 8 chars
      number: /[0-9]/.test(pwd),                                  // contains number
      uppercase: /[A-Z]/.test(pwd),                               // contains uppercase
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(pwd)             // contains special
    };
    setPasswordValidation(validations);                           // update flags
    return Object.values(validations).every(Boolean);             // all true?
  };

  // simple name validator
  const validateName = name => /^[A-Za-z']+$/.test(name);         // letters + apostrophe

  // form submit handler
  const handleSubmit = async event => {
    event.preventDefault();                                       // prevent reload
    // grab input values
    const firstname = document.querySelector('#Fast-Name').value.trim();
    const lastname  = document.querySelector('#Last-Name').value.trim();
    const username  = `${firstname} ${lastname}`;                 // combine names
    const email     = document.querySelector('#Email-Address').value.trim();

    // terms checkbox check
    if (!document.getElementById('terms-checkbox').checked) {
      alert("Please agree to the User Agreement before proceeding.");
      return;
    }
    // name format check
    if (!validateName(firstname) || !validateName(lastname)) {
      alert("First and last names can only contain letters and apostrophes.");
      return;
    }
    // password strength check
    if (!validatePassword(password)) {
      alert("Password does not meet the requirements.");
      return;
    }

    try {
      // registration API call
      const response = await fetch(
        'https://findmydocmain-production.up.railway.app/api/auth/local/register',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, email, password })
        }
      );
      const data = await response.json();                          // parse JSON
      console.log("API Response:", data);                          // debug log
      if (response.ok && data.jwt) {
        localStorage.setItem('jwt', data.jwt);                     // store token
        localStorage.setItem('user', JSON.stringify(data.user));   // store user
        alert("Registration successful! You are now signed in.");
        navigate('/');                                             // redirect home
      } else {
        throw new Error(data.error?.message || "Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error);                  // log error
      alert("Registration failed: " + error.message);              // user feedback
    }
  };

  return (
    <div className="signUpPage">                                  {/* page wrapper */}
      <Header />                                                  {/* header */}

      {/* Breadcrumb */}
      <section className="breadcrumb-section-signup">             {/* breadcrumb */}
        <div className="w-layout-blockcontainer doctors-container w-container">
          <div className="breadcrumb-wrapper">
            <div className="breadcrumb-title-block">
              <h1 className="breadcumb-title">Sign-Up</h1>         {/* page title */}
              <div className="home-page-back-link-wrap">
                <a href="/" className="page-link">Home</a>         {/* home link */}
                <div className="divider">/</div>
                <div className="page-name">Sign-Up</div>          {/* current page */}
              </div>
            </div>
            <div className="breadcrumb-shape-block">
              <div className="inside-vector-wrap">               {/* decorative shapes */}
                <img src={insideVectorSemiSmall} alt="Vector" className="inside-vector-semi-small" />
                <img src={insideVectorSmall}      alt="Vector" className="inside-vector-small" />
                <img src={insideVectorMedium}     alt="Vector" className="inside-vector-medium" />
                <img src={insideVectorLarge}      alt="Vector" className="inside-vector-large" />
                <img src={insideVectorSemiLarge}  alt="Vector" className="inside-vector-semi-large" />
              </div>
            </div>
          </div>
        </div>
        <img src={outsideVectorLarge} alt="Vector" className="outside-vector-large" /> {/* bg vector */}
      </section>

      {/* Sign Up Form */}
      <div className="sign-up-margin-top">                        {/* form container */}
        <div className="main-wrapper sign-up-wrapper">
          <section className="authentication-section position-absolute d-flex">
            <div className="w-layout-blockcontainer doctors-container position-absolute w-container">
              <div className="authentication-form-wrapper">
                <div className="authentication-content-wrap">
                  <h1 className="authentication-title">Create New Account</h1> {/* heading */}
                  <div className="authentication-sub-title">Start your journey here</div> {/* subheading */}
                  <form className="validation-input-form" onSubmit={handleSubmit}>
                    <div className="validation-name-wrap">          {/* name fields */}
                      <div className="validation-name-block">
                        <label htmlFor="Fast-Name">First Name</label>
                        <input id="Fast-Name" type="text" placeholder="First name" required />
                      </div>
                      <div className="validation-name-block">
                        <label htmlFor="Last-Name">Last Name</label>
                        <input id="Last-Name" type="text" placeholder="Last name" required />
                      </div>
                    </div>
                    <label htmlFor="Email-Address">Email Address</label> {/* email field */}
                    <input id="Email-Address" type="email" placeholder="Enter your email" required />
                    <label htmlFor="Password">Password</label>         {/* password field */}
                    <input
                      id="Password"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={e => {
                        setPassword(e.target.value);                // update state
                        validatePassword(e.target.value);           // check strength
                      }}
                      required
                    />
                    <div id="password-validation" className="password-validation-messages">
                      {/* validation messages */}
                      <div style={{ color: passwordValidation.length ? 'green' : 'red' }}>
                        At least 8 characters
                      </div>
                      <div style={{ color: passwordValidation.number ? 'green' : 'red' }}>
                        At least one number
                      </div>
                      <div style={{ color: passwordValidation.uppercase ? 'green' : 'red' }}>
                        At least one uppercase letter
                      </div>
                      <div style={{ color: passwordValidation.specialChar ? 'green' : 'red' }}>
                        At least one special character (!@#$%^&* etc.)
                      </div>
                    </div>
                    <div className="terms-agreement">               {/* terms checkbox */}
                      <input type="checkbox" id="terms-checkbox" required />
                      <label htmlFor="terms-checkbox">
                        I agree to the{' '}
                        <a href="#" onClick={openUserAgreement} className="terms-link">
                          User Agreement
                        </a>
                      </label>
                    </div>
                    <div className="login-condition-block">         {/* login link */}
                      <div className="login-conditon-title">Already have an account?</div>
                      <Link to="/sign-in" className="register-link">Login</Link>
                    </div>
                    <button type="submit" className="button-primary text-center w-button">
                      Create Account                                {/* submit button */}
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="authentication-banner">               {/* banner image */}
              <img src={authBanner} alt="Authentication Banner" className="authentication-banner-image" />
            </div>
          </section>
        </div>
      </div>

      {/* User Agreement Popup */}
      {showAgreement && (
        <div className="user-agreement-popup" onClick={e => e.target === e.currentTarget && closeUserAgreement()}>
          <div className="popup-content">                     {/* popup container */}
            <span className="close-btn" onClick={closeUserAgreement}>&times;</span> {/* close button */}
            <div id="agreementText">                          {/* agreement text */}
              <h2>FindMyDoc User Agreement</h2>
              <h3>1. Acceptance of Terms</h3>
              <p>By accessing or using the FindMyDoc website ("Service"), you agree to be bound by this User Agreement. If you do not agree, you may not use the Service.</p>
              <h3>2. Data Privacy & Security</h3>
              <p>a. FindMyDoc collects and stores user-provided data, including location and reviews, to improve services.</p>
              <p>b. Personal data is handled in accordance with applicable privacy laws and will not be sold or shared with third parties without consent.</p>
              <p>c. FindMyDoc undergoes periodic vulnerability assessments to identify and mitigate potential security risks.</p>
              <p>d. We require our key vendors, partners, and third-party service providers to implement preventive security measures consistent with industry best practices.</p>
              <p>e. Security and privacy requirements may evolve over time to align with advancements in technology and the ever-changing cybersecurity landscape.</p>
              <h3>3. Application Use & Restrictions</h3>
              <p>a. FindMyDoc is provided for personal and non-commercial use only.</p>
              <p>b. Users may not modify, distribute, sell, or exploit any data obtained through the Service without prior written consent from Forestview.</p>
              <p>c. Unauthorized access, data scraping, or interference with system integrity is strictly prohibited.</p>
              <h3>4. Compliance with Industry Standards</h3>
              <p>a. FindMyDoc is designed to comply with applicable healthcare and data security regulations, including but not limited to:</p>
              <ul>
                <li>HIPAA (Health Insurance Portability and Accountability Act), where applicable</li>
                <li>GDPR (General Data Protection Regulation) for European users</li>
                <li>NIST (National Institute of Standards and Technology) security framework</li>
              </ul>
              <p>b. Our security policies are regularly reviewed to align with industry-specific best practices and legal requirements.</p>
              <h3>5. Third-Party Services & Liability</h3>
              <p>a. FindMyDoc may display third-party information, including reviews and doctor listings. We do not guarantee the accuracy of such content.</p>
              <p>b. Users assume all risks associated with using information from the Service. FindMyDoc is not responsible for medical decisions made based on its content.</p>
              <h3>6. Unilateral Indemnity Clause</h3>
              <p>a. Limitation of Liability: Forestview, its affiliates, employees, and partners shall not be held responsible for any damages, losses, or legal claims arising from the use of FindMyDoc.</p>
              <p>b. Cybersecurity Disclaimer: Users acknowledge that no system is immune to data breaches, zero-day attacks, database worms (including SQL injection), or other cybersecurity threats. Forestview assumes no liability for unauthorized access, data loss, or security vulnerabilities.</p>
              <p>c. Indemnification: Users agree to indemnify and hold harmless Forestview from any claims, damages, or legal actions related to data breaches, cyberattacks, or misuse of the Service.</p>
              <h3>7. Changes to the Agreement</h3>
              <p>FindMyDoc reserves the right to update this User Agreement. Continued use of the Service after changes constitute acceptance of the new terms.</p>
              <h3>8. Termination</h3>
              <p>FindMyDoc reserves the right to suspend or terminate access for users who violate these terms.</p>
              <p><em>By using FindMyDoc, you acknowledge that you have	read, understood, and agree to this User Agreement.</em></p>
            </div>
          </div>
        </div>
      )}

      <Footer />                                                   {/* footer */}
    </div>
  );
}
