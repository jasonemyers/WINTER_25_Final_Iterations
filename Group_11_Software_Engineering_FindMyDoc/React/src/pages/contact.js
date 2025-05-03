import React, { useState, useEffect } from 'react';               // React core + hooks
import { useNavigate, Link } from 'react-router-dom';              // routing helpers
import '../styles.css';                                             // global styles

// Assets
import iconsMedical from '../assets/icons8-medical-50_1icons8-medical-50.png';  // medical icon
import iconsAccount from '../assets/icons8-account-50_1icons8-account-50.png'; // account icon
import insideVectorSemiSmall from '../assets/Inside-vector-semi-small.svg';     // breadcrumb shape
import insideVectorSmall from '../assets/Inside-vector-small.svg';              // breadcrumb shape
import insideVectorMedium from '../assets/Inside-vector-medium.svg';            // breadcrumb shape
import insideVectorLarge from '../assets/Inside-vector-large.svg';              // breadcrumb shape
import insideVectorSemiLarge from '../assets/Inside-vector-semi-large.svg';     // breadcrumb shape
import outsideVectorLarge from '../assets/Outside-vector-large.svg';            // background shape

export default function Contact() {
  const [user, setUser] = useState(null);                          // track logged-in user
  const navigate = useNavigate();                                  // navigation helper

  useEffect(() => {
    const storedUser = localStorage.getItem('user');               // fetch user from storage
    if (storedUser) {
      setUser(JSON.parse(storedUser));                             // parse and set user
    }
  }, []);                                                          // run once on mount

  const handleLogout = () => {
    localStorage.removeItem('jwt');                                // remove token
    localStorage.removeItem('user');                               // remove user
    setUser(null);                                                 // clear state
    navigate('/sign-out');                                         // redirect to sign-out
  };

  return (
    <div className="contactPage">                                  {/* page wrapper */}

      {/* Header Begin */}
      <section className="header-section position-absoulate">      {/* fixed header */}
        <div className="header w-nav" role="banner">
          <div className="top-header">
            <div className="top-bar header-wrapper">
              <div className="header-container w-container">
                <div className="top-bar-flex">
                  <div>
                    <h1 className="heading">
                      <span className="text-span">F</span>ind
                      <span className="text-span-2">M</span>y
                      <span className="text-span-3">D</span>oc         {/* logo text */}
                    </h1>
                    <div className="text-block">Yassir, Amy, Connor, Emily, Austin</div> {/* team names */}
                  </div>
                  <div className="phone-menu">
                    <div className="top-div-box">
                      <img src={iconsMedical} loading="lazy" alt="" className="top-link-image" /> {/* icon */}
                      <Link to="/doctors-sign-in" className="top-link">
                        FindMyDoc for Professionals                       {/* professionals sign-in */}
                      </Link>
                    </div>
                    <div className="top-div-box">
                      <img src={iconsAccount} loading="lazy" width="74" alt="" className="top-link-image" /> {/* icon */}
                      {user ? (
                        <>
                          <button className="sign-out" onClick={handleLogout}>
                            Sign Out                                    {/* logout button */}
                          </button>
                          <Link to="/dashboard" className="dashboard-button">
                            Dashboard                                    {/* go to dashboard */}
                          </Link>
                        </>
                      ) : (
                        <Link to="/sign-in" className="dashboard-button">
                          Account Sign in                              {/* user sign-in */}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="header-container w-container">
                <div className="header-content">
                  <Link to="/" className="header-logo w-nav-brand"></Link> {/* logo link */}
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
                      <div className="hamberguer-menu"></div>           {/* hamburger icon */}
                      <div className="hamburger-menu-bar"></div>       {/* hamburger icon */}
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
              <h1 className="breadcumb-title">Contact Us</h1>     {/* breadcrumb title */}
              <div className="home-page-back-link-wrap">
                <a href="#" className="page-link">Home</a>         {/* home link */}
                <div className="divider">/</div>                  {/* divider */}
                <div className="page-name">Contact Us</div>      {/* current page */}
              </div>
            </div>

            <div className="breadcrumb-shape-block">
              <div className="inside-vector-wrap">
                <img src={insideVectorSemiSmall} loading="lazy" alt="Vector" className="inside-vector-semi-small" /> {/* shapes */}
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

      {/* Contact Form Start */}
      <section id="Contact" className="contact-form-section section-gap-y-axis-140px">
        <div className="w-layout-blockcontainer doctors-container w-container">
          <div className="contact-form-wrapper">
            <div className="section-title-wrap align-center margin-bottom-60px">
              <div className="section-sub-title">Get in Touch</div> {/* subtitle */}
              <h2 className="section-title contact-form">
                Contact Us for Personalized Assistance and Quick Resolutions. {/* heading */}
              </h2>
            </div>

            {/* Contact Form Block */}
            <div className="contact-input-form-block">
              <div className="contact-form-input-block w-form">
                <form
                  id="Email-Form"
                  name="wf-form-Email-Form"
                  data-name="Email Form"
                  method="get"
                  className="contact-form"
                >
                  <div className="contact-input-field-grid">
                    <input
                      className="contact-input-field w-input"
                      maxLength="256"
                      name="name"
                      data-name="Name"
                      placeholder="Your name"
                      type="text"
                      id="name"                                 {/* name field */}
                    />
                    <input
                      className="contact-input-field w-input"
                      maxLength="256"
                      name="Email"
                      data-name="Email"
                      placeholder="Enter your email"
                      type="email"
                      id="Email"
                      required                                   {/* email field */}
                    />
                    <input
                      className="contact-input-field w-input"
                      maxLength="256"
                      name="Phone"
                      data-name="Phone"
                      placeholder="Your phone number"
                      type="tel"
                      id="Phone"
                      required                                   {/* phone field */}
                    />
                    <input
                      className="contact-input-field w-input"
                      maxLength="256"
                      name="Subject"
                      data-name="Subject"
                      placeholder="Write your Subject"
                      type="tel"
                      id="Subject"
                      required                                   {/* subject field */}
                    />
                  </div>
                  <textarea
                    placeholder="Write your message..."
                    maxLength="5000"
                    id="field"
                    name="field"
                    data-name="Field"
                    className="contact-input-textaria w-input"
                  ></textarea>                                   {/* message textarea */}
                  <input
                    type="submit"
                    data-wait="Please wait..."
                    className="button-primary center w-button"
                    value="Send Message"                       {/* submit button */}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Contact Form */}

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
                    <span className="text-span-3">D</span>oc       {/* footer logo */}
                  </h1>
                </a>
                <div className="footer-address">
                  Empowering wellness through knowledge and care      {/* footer tagline */}
                </div>
              </div>
            </div>
            <div className="copy-right-block">
              <div className="footer-copyright-center">
                Copyright ©{' '}
                <a href="#" className="template-link">
                  FindMyDoc                                    {/* site name */}
                </a>
                | Designed by{' '}
                <a href="#" target="_blank" rel="noopener noreferrer" className="brandbes-link">
                  Amy, Yassir, Austin, Ayman, Connor            {/* designers */}
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
