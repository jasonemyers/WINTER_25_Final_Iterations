import React, { useState, useEffect } from 'react';            // React and hooks
import { useNavigate, Link } from 'react-router-dom';           // routing helpers
import '../styles.css';                                         // global styles

// Assets
import iconsMedical from '../assets/icons8-medical-50_1icons8-medical-50.png';   // medical icon
import iconsAccount from '../assets/icons8-account-50_1icons8-account-50.png';  // account icon
import aboutHeroBanner from '../assets/About-hero-banner.jpg';                  // hero banner
import ourMissionBanner from '../assets/our-mission-banner.jpg';               // mission banner
import ourApartBanner from '../assets/our-apart-banner.jpg';                   // apart banner
import ctaBanner from '../assets/CTA-banner.jpg';                             // CTA banner
import ctaBottomVector from '../assets/CTA-bottom-pluse-vector.svg';           // CTA bottom vector
import ctaTopEllipse from '../assets/CTA-top-ellipse-shape.svg';              // CTA top ellipse
import insideVectorSemiSmall from '../assets/Inside-vector-semi-small.svg';   // breadcrumb shape
import insideVectorSmall from '../assets/Inside-vector-small.svg';            // breadcrumb shape
import insideVectorMedium from '../assets/Inside-vector-medium.svg';          // breadcrumb shape
import insideVectorLarge from '../assets/Inside-vector-large.svg';            // breadcrumb shape
import insideVectorSemiLarge from '../assets/Inside-vector-semi-large.svg';   // breadcrumb shape
import outsideVectorLarge from '../assets/Outside-vector-large.svg';          // background shape

export default function About() {
  const [user, setUser] = useState(null);                        // user state
  const navigate = useNavigate();                                // navigate helper

  useEffect(() => {
    const storedUser = localStorage.getItem('user');             // get user from storage
    if (storedUser) {
      setUser(JSON.parse(storedUser));                           // parse and set
    }
  }, []);                                                        // run once

  const handleLogout = () => {
    localStorage.removeItem('jwt');                              // clear token
    localStorage.removeItem('user');                             // clear user
    setUser(null);                                               // reset state
    navigate('/sign-out');                                       // redirect
  };

  return (
    <div className="aboutPage">                                  {/* main container */}

      {/* Header Begin */}
      <section className="header-section position-absoulate">    {/* fixed header */}
        <div className="header w-nav" role="banner">
          <div className="top-header">
            <div className="top-bar header-wrapper">
              <div className="header-container w-container">
                <div className="top-bar-flex">
                  <div>
                    <h1 className="heading">
                      <span className="text-span">F</span>ind
                      <span className="text-span-2">M</span>y
                      <span className="text-span-3">D</span>oc   {/* logo */}
                    </h1>
                    <div className="text-block">Yassir, Amy, Connor, Emily, Austin</div> {/* team */}
                  </div>
                  <div className="phone-menu">
                    <div className="top-div-box">
                      <img src={iconsMedical} loading="lazy" alt="" className="top-link-image" /> {/* icon */}
                      <Link to="/doctors-sign-in" className="top-link">FindMyDoc for Professionals</Link> {/* pro login */}
                    </div>
                    <div className="top-div-box">
                      <img src={iconsAccount} loading="lazy" width="74" alt="" className="top-link-image" /> {/* icon */}
                      {user ? (
                        <>
                          <button className="sign-out" onClick={handleLogout}>Sign Out</button> {/* logout */}
                          <Link to="/dashboard" className="dashboard-button">Dashboard</Link>   {/* dashboard */}
                        </>
                      ) : (
                        <Link to="/sign-in" className="dashboard-button">Account Sign in</Link> {/* sign in */}
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
                            <Link to="/" className="brix---header-nav-link w-nav-link">Home</Link> {/* nav */}
                          </li>
                          <li className="brix---header-nav-list-item">
                            <Link to="/about" className="brix---header-nav-link w-nav-link">About</Link> {/* nav */}
                          </li>
                          <li className="brix---header-nav-list-item">
                            <Link to="/doctors" className="brix---header-nav-link w-nav-link">Doctors</Link> {/* nav */}
                          </li>
                          <li className="brix---header-nav-list-item">
                            <Link to="/contact" className="brix---header-nav-link w-nav-link">Contact</Link> {/* nav */}
                          </li>
                        </ul>
                      </div>
                    </nav>
                    <div className="hamburger w-nav-button">
                      <div className="hamberguer-menu"></div>          {/* burger icon */}
                      <div className="hamburger-menu-bar"></div>      {/* burger icon */}
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
              <h1 className="breadcumb-title">About Us</h1>        {/* page title */}
              <div className="home-page-back-link-wrap">
                <a href="#" className="page-link">Home</a>         {/* home link */}
                <div className="divider">/</div>                  {/* separator */}
                <div className="page-name">About Us</div>        {/* current */}
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
        <img src={outsideVectorLarge} loading="lazy" alt="Vector" className="outside-vector-large" /> {/* bg */}
      </section>
      {/* BreadCrumb end */}

      {/* Hero Start */}
      <section className="about-hero-section section-gap-y-axis-140px">
        <div className="w-layout-blockcontainer doctors-container w-container">
          <div className="about-hero-wrapper">
            <h2 className="section-title about-hero">Stay Healthy With 100% Treatment</h2> {/* headline */}
            <p className="about-hero-description">
              At MedCare, our unwavering commitment to health excellence drives our mission. {/* description */}
            </p>
            <div className="about-hero-banner-image-wrap margin-top-60px">
              <img
                src={aboutHeroBanner}
                loading="lazy"
                sizes="(max-width: 767px) 100vw, 960px"
                srcSet={`${aboutHeroBanner} 500w, ${aboutHeroBanner} 1080w`} {/* responsive */}
                alt="About Hero Banner"
                className="about-hero-banner-image"
              />
            </div>
            <div className="about-us-countdown-wrap margin-top-60px">
              {/* Affiliations counter */}
              <div className="our-service-count-block about">
                <div className="our-service-counter-number-wrapper about">
                  <div className="counter-number-block lower-movement">
                    {[0,1,2,3,4,5].map(num => <div key={num} className="counter-number our-service">{num}</div>)}
                  </div>
                  <div className="counter-number-block upper-movement">
                    {[5,4,3,2,1,5].map(num => <div key={num} className="counter-number our-service">{num}</div>)}
                  </div>
                  <div className="counter-heading our-service primary-color">+</div> {/* plus */}
                </div>
                <div className="our-service-count-title">Affiliations</div> {/* label */}
              </div>
              <div className="top-align-border"></div>                    {/* separator */}
              {/* Reviews counter */}
              <div className="our-service-count-block about">
                <div className="our-service-counter-number-wrapper about">
                  <div className="counter-number-block lower-movement">
                    {[1,2,3,4,5,7].map(num => <div key={num} className="counter-number our-service">{num}</div>)}
                  </div>
                  <div className="counter-number-block upper-movement">
                    {[5,4,3,2,1,0].map(num => <div key={num} className="counter-number our-service">{num}</div>)}
                  </div>
                  <div className="counter-heading our-service primary-color">+</div> {/* plus */}
                </div>
                <div className="our-service-count-title">Reviews</div>       {/* label */}
              </div>
              <div className="top-align-border"></div>                    {/* separator */}
              {/* Doctors counter */}
              <div className="our-service-count-block about">
                <div className="our-service-counter-number-wrapper about">
                  <div className="counter-number-block lower-movement">
                    {[1,0,3,4,5,6].map(num => <div key={num} className="counter-number our-service">{num}</div>)}
                  </div>
                  <div className="counter-number-block upper-movement">
                    {[0,1,2,3,4,5,6].map(num => <div key={num} className="counter-number our-service">{num}</div>)}
                  </div>
                  <div className="counter-heading our-service primary-color-span">+</div> {/* plus */}
                </div>
                <div className="our-service-count-title">Doctors</div>      {/* label */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero End */}

      {/* Mission Start */}
      <section className="our-mission-section padding-bottom-140px">
        <div className="w-layout-blockcontainer doctors-container w-container">
          <div className="our-mission-wrapper">
            <div className="our-mission-content-wrap">
              <h2 className="section-title">Our Mission</h2>         {/* title */}
              <p className="mission-description">
                Our mission is to promote health literacy, facilitate access to quality care, and raise awareness for healthier living. {/* text */}
              </p>
              <ul role="list" className="our-misson-item-list-wrap">
                <li className="our-mission-list-item">Empower Informed Decision-Making.</li> {/* item */}
                <li className="our-mission-list-item">Promote health literacy.</li>         {/* item */}
                <li className="our-mission-list-item">Foster a supportive community.</li>    {/* item */}
                <li className="our-mission-list-item">Facilitate access to quality care.</li> {/* item */}
                <li className="our-mission-list-item">Promote ethical medical practices.</li> {/* item */}
              </ul>
            </div>
            <div className="our-mission-banner-wrap">
              <img
                src={ourMissionBanner}
                loading="lazy"
                sizes="(max-width: 767px) 100vw, 676px"
                srcSet={`${ourMissionBanner} 500w, ${ourMissionBanner} 700w`}
                alt="Our Mission Banner Image"
                className="our-mission-banner-image"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Mission End */}

      {/* Our Part Start */}
      <section className="our-apart-section padding-bottom-140px">
        <div className="w-layout-blockcontainer doctors-container w-container">
          <div className="our-apart-wrapper">
            <div className="our-apart-image-wrap">
              <img
                src={ourApartBanner}
                loading="lazy"
                sizes="(max-width: 767px) 100vw, 656px"
                srcSet={`${ourApartBanner} 500w, ${ourApartBanner} 680w`}
                alt="Apart Banner"
                className="our-apart-banner-image"
              />
            </div>
            <div className="our-apart-content-wrap">
              <h2 className="section-title apart">What Sets Us Apart</h2> {/* heading */}
              <div className="our-apart-content-block">
                <h3 className="our-apart-sub-title">Trustworthiness</h3>   {/* subtitle */}
                <p className="our-apart-description">
                  Content curated by medical experts. {/* text */}
                </p>
                <h3 className="our-apart-sub-title">Comprehensive Resources</h3> {/* subtitle */}
                <p className="our-apart-description">
                  Info on conditions and providers. {/* text */}
                </p>
                <h3 className="our-apart-sub-title">Community and Support</h3> {/* subtitle */}
                <p className="our-apart-description">
                  Forums and support groups. {/* text */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Part End */}

      {/* CTA Start */}
      <section className="cta-section padding-bottom-140px">
        <div className="w-layout-blockcontainer doctors-container w-container">
          <div className="cta-wrapper center">
            <div className="cta-banner-image-wrap">
              <img
                src={ctaBanner}
                loading="lazy"
                sizes="(max-width: 767px) 100vw, 456px"
                srcSet={`${ctaBanner} 500w, ${ctaBanner} 700w`}
                alt="CTA Banner"
                className="cta-banner-image"
              />
            </div>
            <div className="cta-content-wrap">
              <h2 className="cta-section-title cta">View doctor reviews and share your own.</h2> {/* CTA text */}
              <div className="button-primary-wrap">
                <Link to="/doctors" className="button-primary white w-button">VIEW ALL</Link> {/* CTA link */}
              </div>
              <img src={ctaBottomVector} loading="lazy" alt="Vector" className="cta-vector-shape" /> {/* bottom vector */}
              <img src={ctaTopEllipse} loading="lazy" alt="Ellipse Shape" className="cta-ellipse-shape" /> {/* top ellipse */}
            </div>
          </div>
        </div>
      </section>
      {/* CTA end */}

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
                    <span className="text-span-3">D</span>oc {/* logo */}
                  </h1>
                </a>
                <div className="footer-address">Empowering wellness through knowledge and care</div> {/* tagline */}
              </div>
            </div>
            <div className="copy-right-block">
              <div className="footer-copyright-center">
                Copyright ©{' '}
                <a href="#" className="template-link">FindMyDoc</a> {/* site */}
                | Designed by{' '}
                <a href="#" target="_blank" rel="noopener noreferrer" className="brandbes-link">
                  Amy, Yassir, Austin, Ayman, Connor {/* team */}
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
