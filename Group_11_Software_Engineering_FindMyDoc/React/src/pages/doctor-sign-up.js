import React, { useState, useEffect } from 'react';            // React + hooks
import { useNavigate, Link } from 'react-router-dom';           // router helpers
import '../styles.css';                                         // global styles

// Assets 
import iconsMedical from '../assets/icons8-medical-50_1icons8-medical-50.png';   // medical icon
import iconsAccount from '../assets/icons8-account-50_1icons8-account-50.png';   // account icon
import ctaBanner from '../assets/CTA-banner.jpg';                                // CTA banner
import ctaBottomVector from '../assets/CTA-bottom-pluse-vector.svg';             // CTA bottom shape
import ctaTopEllipse from '../assets/CTA-top-ellipse-shape.svg';                 // CTA top shape
import insideVectorSemiSmall from '../assets/Inside-vector-semi-small.svg';      // breadcrumb shape
import insideVectorSmall from '../assets/Inside-vector-small.svg';               // breadcrumb shape
import insideVectorMedium from '../assets/Inside-vector-medium.svg';             // breadcrumb shape
import insideVectorLarge from '../assets/Inside-vector-large.svg';               // breadcrumb shape
import insideVectorSemiLarge from '../assets/Inside-vector-semi-large.svg';      // breadcrumb shape
import outsideVectorLarge from '../assets/Outside-vector-large.svg';             // background shape

export default function SignInDoctors() {
  const [user, setUser] = useState(null);                           // logged-in user
  const navigate = useNavigate();                                   // navigate helper
        
  useEffect(() => {
    const storedUser = localStorage.getItem('user');                // fetch user
    if (storedUser) {
      setUser(JSON.parse(storedUser));                              // set state
    }
  }, []);                                                           // on mount
        
  const handleLogout = () => {
    localStorage.removeItem('jwt');                                 // clear token
    localStorage.removeItem('user');                                // clear user
    setUser(null);                                                  // reset state
    navigate('/sign-out');                                          // go to sign-out
  };

  // form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();                                             // prevent reload
    // add auth logic here if needed
    navigate('/dashboard');                                         // go to dashboard
  };

  return (
    <div className="signInDoctorsPage">                             {/* page wrapper */}

      {/* Header Begin */}
      <section className="header-section position-absoulate">       {/* fixed header */}
        <div className="header w-nav" role="banner">
          <div className="top-header">
            <div className="top-bar header-wrapper">
              <div className="header-container w-container">
                <div className="top-bar-flex">
                  <div>
                    <h1 className="heading">
                      <span className="text-span">F</span>ind
                      <span className="text-span-2">M</span>y
                      <span className="text-span-3">D</span>oc        {/* logo */}
                    </h1>
                    <div className="text-block">Yassir, Amy, Connor, Emily, Austin</div> {/* team */}
                  </div>
                  <div className="phone-menu">
                    <div className="top-div-box">
                      <img src={iconsMedical} loading="lazy" alt="" className="top-link-image" /> {/* icon */}
                      <Link to="/doctors-sign-in" className="top-link">
                        FindMyDoc for Professionals                         {/* pro sign-in */}
                      </Link>
                    </div>
                    <div className="top-div-box">
                      <img src={iconsAccount} loading="lazy" width="74" alt="" className="top-link-image" /> {/* icon */}
                      {user ? (
                        <>
                          <button className="sign-out" onClick={handleLogout}>
                            Sign Out                                         {/* logout btn */}
                          </button>
                          <Link to="/dashboard" className="dashboard-button">
                            Dashboard                                        {/* dashboard link */}
                          </Link>
                        </>
                      ) : (
                        <Link to="/sign-in" className="dashboard-button">
                          Account Sign in                                  {/* user sign-in */}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
                    
              <div className="header-container w-container">
                <div className="header-content">
                  <Link to="/" className="header-logo w-nav-brand"></Link> {/* home link */}
                  <div className="div-block-14">
                    <nav role="navigation" className="header-men-wrapper w-nav-menu">
                      <div className="div-block-15">
                        <ul role="list" className="brix---header-nav-menu-list">
                          <li className="brix---header-nav-list-item">
                            <Link to="/" className="brix---header-nav-link w-nav-link">Home</Link> {/* nav link */}
                          </li>
                          <li className="brix---header-nav-list-item">
                            <Link to="/about" className="brix---header-nav-link w-nav-link">About</Link> {/* nav link */}
                          </li>
                          <li className="brix---header-nav-list-item">
                            <Link to="/doctors" className="brix---header-nav-link w-nav-link">Doctors</Link> {/* nav link */}
                          </li>
                          <li className="brix---header-nav-list-item">
                            <Link to="/contact" className="brix---header-nav-link w-nav-link">Contact</Link> {/* nav link */}
                          </li>
                        </ul>
                      </div>
                    </nav>
                    <div className="hamburger w-nav-button">
                      <div className="hamberguer-menu"></div>             {/* burger icon */}
                      <div className="hamburger-menu-bar"></div>         {/* burger icon */}
                    </div>
                  </div>
                </div>
              </div>
                    
            </div>
          </div>
        </div>
      </section>
      {/* End Header */}
    
      {/* BreadCrumb Start */}
      <section className="breadcrumb-section">
        <div className="w-layout-blockcontainer doctors-container w-container">
          <div className="breadcrumb-wrapper">
            <div className="breadcrumb-title-block">
              <h1 className="breadcumb-title">Doctor Sign-In</h1>  {/* title */}
              <div className="home-page-back-link-wrap">
                <a href="#" className="page-link">Home</a>          {/* home link */}
                <div className="divider">/</div>                   {/* separator */}
                <div className="page-name">Doctor Sign-In</div>    {/* current page */}
              </div>
            </div>
            <div className="breadcrumb-shape-block">
              <div className="inside-vector-wrap">
                <img src={insideVectorSemiSmall} loading="lazy" alt="Vector" className="inside-vector-semi-small" /> {/* shape */}
                <img src={insideVectorSmall} loading="lazy" alt="Vector" className="inside-vector-small" />
                <img src={insideVectorMedium} loading="lazy" alt="Vector" className="inside-vector-medium" />
                <img src={insideVectorLarge} loading="lazy" alt="Vector" className="inside-vector-large" />
                <img src={insideVectorSemiLarge} loading="lazy" alt="Vector" className="inside-vector-semi-large" />
              </div>
            </div>
          </div>
        </div>
        <img src={outsideVectorLarge} loading="lazy" alt="Vector" className="outside-vector-large" /> {/* background */}
      </section>
      {/* BreadCrumb end */}
    
      {/* Sign in */}
      <section className="doctor-sign-up">
        <div className="div-block-9">
          <div className="div-block-10">
            <div className="authentication-content-wrap">
              <div className="authentication-title-wrap">
                <h1 className="authentication-title">Hello Doctor!</h1> {/* greeting */}
                <div className="authentication-sub-title">Enter your details to continue</div> {/* subtitle */}
              </div>
              <div className="validation-input-form-wrap">
                <div className="validation-input-form-block w-form">
                  <form
                    className="validation-input-form"
                    onSubmit={handleSubmit}                         // submit handler
                  >
                    <label htmlFor="Email-Address-2" className="validation-input-field-level">
                      Email Address                                     {/* label */}
                    </label>
                    <input
                      id="Email-Address-2"
                      className="varidation-form-text-field w-input"
                      type="email"
                      placeholder="Enter your email"                   {/* input */}
                      required
                    />
                    <label htmlFor="Password-2" className="validation-input-field-level">
                      Password                                           {/* label */}
                    </label>
                    <input
                      id="Password-2"
                      className="varidation-form-text-field w-input"
                      type="password"
                      placeholder="Password"                            {/* input */}
                      required
                    />
                    <input
                      type="submit"
                      className="button-primary text-center w-button"
                      value="Log in"                                    {/* submit btn */}
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="div-block-11">
            <h1 className="heading-5">                                {/* prompt */}
              Don&apos;t have an account yet? Claim Your Profile Now
            </h1>
            <Link to="/doctors-sign-up" className="button-primary w-button">
              Sign Up Now                                          {/* signup link */}
            </Link>
          </div>
        </div>
      </section>
      {/* Sign in End */}
    
      {/* CTA Start */}
      <section className="cta-section padding-bottom-140px">
        <div className="w-layout-blockcontainer doctors-container w-container">
          <div className="cta-wrapper center">
            <div className="cta-banner-image-wrap">
              <img src={ctaBanner} loading="lazy" alt="CTA Banner" className="cta-banner-image" /> {/* CTA image */}
            </div>
            <div className="cta-content-wrap">
              <h2 className="cta-section-title cta">                     {/* CTA text */}
                View doctor reviews and share your own.
              </h2>
              <div className="button-primary-wrap">
                <Link to="/doctors" className="button-primary white w-button">VIEW ALL</Link> {/* link */}
              </div>
              <img src={ctaBottomVector} loading="lazy" alt="Vector" className="cta-vector-shape" /> {/* bottom vector */}
              <img src={ctaTopEllipse} loading="lazy" alt="Ellipse Shape" className="cta-ellipse-shape" /> {/* ellipse */}
            </div>
          </div>
        </div>
      </section>
      {/* CTA End */}
    
      {/* Footer Section Start */}
      <section className="footer-section">
        <div className="w-layout-blockcontainer doctors-container footer-container w-container">
          <div className="footer-block-wrapper">
            <div className="footer-content">
              <div className="footer-block">
                <a href="#" className="footer-logo-link-block w-inline-block">
                  <h1 className="heading">
                    <span className="text-span">F</span>ind
                    <span className="text-span-2">M</span>y
                    <span className="text-span-3">D</span>oc            {/* footer logo */}
                  </h1>
                </a>
                <div className="footer-address">Empowering wellness through knowledge and care</div> {/* tagline */}
              </div>
            </div>
            <div className="copy-right-block">
              <div className="footer-copyright-center">
                Copyright ©{' '}
                <a href="#" className="template-link">FindMyDoc</a>         {/* site */}
                | Designed by{' '}
                <a href="#" target="_blank" rel="noopener noreferrer" className="brandbes-link">
                  Amy, Yassir, Austin, Ayman, Connor                     {/* team */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer Section End */}
    </div>
  );
}
