import React, { useState, useEffect } from 'react';                 // React core + hooks
import { useNavigate, Link } from 'react-router-dom';                 // routing helpers
import '../styles.css';                                              // global styles

// Assets
import bannerImg from '../assets/banner-dr-img.png';                 // hero image
import rectangleImg from '../assets/hero-one-rectangle_1hero-one-rectangle.png'; // shape
import doctorCard from '../assets/dr-cart.png';                      // doctor card graphic
import roundedShape from '../assets/hero-oneround-shape.svg';        // decorative shape
import iconsMedical from '../assets/icons8-medical-50_1icons8-medical-50.png'; // service icon
import iconsAccount from '../assets/icons8-account-50_1icons8-account-50.png'; // service icon
import locationIcon from '../assets/location.svg';                   // location icon
import drIcon from '../assets/dr-icon.svg';                          // specialty icon
import ellipseTop from '../assets/ellipse-top_1ellipse-top.png';     // about us ellipse
import ellipseCenter from '../assets/ellipse-center_1ellipse-center.png'; // about us ellipse
import ellipseBottom from '../assets/ellipse-bottom_1ellipse-bottom.png'; // about us ellipse
import heroOneround from '../assets/hero-oneround-shape.svg';        // service star icon
import aboutBanner from '../assets/about-banner-image-large.png';    // about banner
import aboutBannerLarge from '../assets/about-banner-image-large.png';// about banner
import aboutBanner500 from '../assets/about-banner-image-large-p-500.png'; // responsive image
import banner2 from '../assets/About-Banner-Image-Two.jpg';          // secondary banner
import logo1 from '../assets/medicaid-removebg-preview.png';        // partner logo
import logo2 from '../assets/logo2.png';                            // partner logo
import logo3 from '../assets/logo3-removebg-preview.png';           // partner logo
import logo4 from '../assets/logo4-removebg-preview.png';           // partner logo
import medicaidPreview500 from '../assets/medicaid-removebg-preview-p-500.png'; // responsive logo
import Header from '../components/header';                           // header component
import Footer from '../components/footer';                           // footer component

export default function Home() {
  const [search, setSearch] = useState('');                          // search input
  const [specialty, setSpecialty] = useState('');                    // specialty input
  const [location, setLocation] = useState('');                      // location input
  const navigate = useNavigate();                                    // navigation

  const [user, setUser] = useState(null);                            // user state

  useEffect(() => {
    const storedUser = localStorage.getItem('user');                 // check storage
    if (storedUser) {
      setUser(JSON.parse(storedUser));                               // parse user
    }
  }, []);                                                            // run once

  const handleLogout = () => {
    localStorage.removeItem('jwt');                                  // clear token
    localStorage.removeItem('user');                                 // clear user
    setUser(null);                                                   // reset state
    navigate('/sign-out');                                           // redirect
  };

  const handleSubmit = (e) => {
    e.preventDefault();                                              // prevent reload
    const query = `?name=${encodeURIComponent(search)}&specialty=${encodeURIComponent(specialty)}&location=${encodeURIComponent(location)}`; // build query
    navigate(`/doctors${query}`);                                    // go to doctors page
  };

  const logos = [logo1, logo2, logo3, logo4];                        // partner logos

  const [tooltipData, setTooltipData] = useState(null);              // popup data
  const [showPopup, setShowPopup] = useState(false);                 // popup visibility

  useEffect(() => {
    fetchPopupContent()                                              // load popup content
      .then(data => setTooltipData(data))                            // set data
      .catch(error => console.error('Error loading popup:', error)); // handle error
  }, []);                                                            // run once

  async function fetchPopupContent() {
    try {
      const response = await fetch('https://findmydocprojectpythonserver-production.up.railway.app/popup-content'); // API call
      if (!response.ok) throw new Error('Network response failed'); // check status
      return await response.json();                                 // parse JSON
    } catch (error) {
      throw error;                                                   // propagate error
    }
  }

  const openPopup = () => setShowPopup(true);                        // show popup
  const closePopup = () => setShowPopup(false);                      // hide popup

  return (
    <div className="homePage">                                       {/* wrapper */}
      <Header />                                                     {/* header */}

      {/* Hero Section */}
      <div id="Scroll-Top" className="page-wrapper home-page">
        <div className="main-wrapper">
          <section className="hero-section-one">
            <div className="w-layout-blockcontainer doctors-container w-container">
              <div className="hero-section-one-wrapper">
                <div className="hero-one-content-wrap">
                  <h1 className="hero-title">
                    Find the best <span className="hero-title-span">doctors </span>near you {/* title */}
                  </h1>
                  <p className="hero-title-description">
                    Discover top-rated doctors, read real patient reviews, and leave reviews to help others. {/* tagline */}
                  </p>
                  <img src={doctorCard} alt="Doctor Card" className="dr-list-card" /> {/* image */}
                  <img src={roundedShape} alt="Rounded Shape" className="hero-one-rounded-shape" /> {/* shape */}
                  <div className="dr-dropdown-serach-wrap home-page-search">
                    <div className="dr-dropdown-serach-form-wrap home-page-search-bar-container w-form">
                      <form onSubmit={handleSubmit} className="dr-dropdown-serach-form">
                        {/* Search by Name */}
                        <div className="search-block">
                          <input
                            className="search w-input"
                            maxLength="256"
                            placeholder="Search for a doctor..."
                            type="text"
                            value={search}
                            onChange={e => setSearch(e.target.value)}      // update search
                          />
                        </div>
                        {/* Location */}
                        <div className="location">
                          <div className="location-icon-wrap">
                            <img src={locationIcon} alt="Location Icon" className="location-icon" /> {/* icon */}
                          </div>
                          <input
                            className="search location-serach w-input"
                            maxLength="256"
                            placeholder="Search by city..."
                            type="text"
                            value={location}
                            onChange={e => setLocation(e.target.value)}  // update location
                          />
                        </div>
                        {/* Specialty */}
                        <div className="speciality">
                          <div className="dr-icon-wrap">
                            <img src={drIcon} alt="Dr Icon" className="dr-icon" /> {/* icon */}
                          </div>
                          <input
                            type="text"
                            placeholder="Search by specialty"
                            className="filter-input"
                            value={specialty}
                            onChange={e => setSpecialty(e.target.value)} // update specialty
                          />
                        </div>
                        {/* Submit */}
                        <button type="submit" className="dr-serach-button w-button"></button> {/* search btn */}
                      </form>
                    </div>
                  </div>
                </div>
                {/* Banner */}
                <div className="hero-one-banner-wrap">
                  <img src={bannerImg} alt="Banner" className="hero-one-banner-image" /> {/* hero img */}
                </div>
                <img src={rectangleImg} alt="Rectangle Shape" className="hero-bg-rectangle-shape" /> {/* bg shape */}
              </div>
            </div>
            <div className="hero-section-one-bg-shape"></div> {/* background */}
          </section>
        </div>
      </div>
      {/* Hero End */}

      {/* Service Section */}
      <section className="service-section section-gap-y-axis-140px">
        <div className="w-layout-blockcontainer doctors-container services-container w-container">
          <div className="service-section-wrapper">
            <div className="section-title-wrap center">
              <div className="section-sub-title">Services</div>       {/* subtitle */}
              <h2 className="section-title service">The Best Quality Service You Can Get</h2> {/* title */}
            </div>
            <div className="service-slider-mask">
              {/* Service Item 1 */}
              <div className="service-slider-item">
                <div className="department-slider-card">
                  <div className="department-icon-wrapper">
                    <img alt="Doctor Icon" src={iconsMedical} className="department-icon" /> {/* icon */}
                  </div>
                  <div className="department-slider-content">
                    <h3 className="department-name">We help you choose the right doctor</h3> {/* heading */}
                    <p className="department-short-details">
                      Easily search, filter, and compare top-rated professionals to get the care you need. {/* text */}
                    </p>
                  </div>
                </div>
              </div>
              {/* Service Item 2 */}
              <div className="service-slider-item">
                <div className="department-slider-card">
                  <div className="department-icon-wrapper">
                    <img alt="Review Icon" src={iconsAccount} className="department-icon" /> {/* icon */}
                  </div>
                  <div className="department-slider-content">
                    <h3 className="department-name">Help others choose the right doctor</h3> {/* heading */}
                    <p className="department-short-details">
                      Share your experience with a doctor to help guide others in the right direction. {/* text */}
                    </p>
                  </div>
                </div>
              </div>
              {/* Service Item 3 */}
              <div className="service-slider-item">
                <div className="department-slider-card">
                  <div className="department-icon-wrapper">
                    <img alt="Star Icon" src={heroOneround} className="department-icon" /> {/* icon */}
                  </div>
                  <div className="department-slider-content">
                    <h3 className="department-name">Give the right doctors some praise</h3> {/* heading */}
                    <p className="department-short-details">
                      Found an amazing doctor? Leave them a glowing review to show appreciation. {/* text */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service End */}

      {/* About Us Section */}
      <section className="home-about-section padding-bottom-140px">
        <div className="w-layout-blockcontainer doctors-container w-container">
          <div className="home-about-section-wrapper">
            <div className="home-about-content-wrap">
              <div className="section-sub-title">About Us</div>           {/* subtitle */}
              <h2 className="section-title about">Stay Healthy With 100% Treatment</h2> {/* title */}
              <p className="about-description">
                At MedCare, our unwavering commitment to health excellence drives our mission. {/* blurb */}
              </p>
              <div className="our-quality-card-block">
                {/* Quality Card 1 */}
                <div className="our-quality-card-wrap">
                  <div className="counter-number-wrapper">              {/* animated counter */}
                    <div className="counter-number-block lower-movement"> {/* lower part */}
                      <div className="counter-number">1</div>
                      <div className="counter-number">2</div>
                      <div className="counter-number">3</div>
                      <div className="counter-number">4</div>
                      <div className="counter-number">1</div>
                    </div>
                    <div className="counter-number-block upper-movement"> {/* upper part */}
                      <div className="counter-number">2</div>
                      <div className="counter-number">0</div>
                      <div className="counter-number">5</div>
                      <div className="counter-number">7</div>
                      <div className="counter-number">2</div>
                    </div>
                    <div className="counter-heading">+</div>            {/* plus sign */}
                  </div>
                  <div className="our-quality-title">Doctor Profiles</div> {/* label */}
                </div>
                {/* Quality Card 2 */}
                <div className="our-quality-card-wrap">
                  <div className="counter-number-wrapper">
                    <div className="counter-number-block lower-movement">
                      <div className="counter-number">0</div>
                      <div className="counter-number">8</div>
                      <div className="counter-number">6</div>
                      <div className="counter-number">2</div>
                      <div className="counter-number">0</div>
                    </div>
                    <div className="counter-number-block upper-movement">
                      <div className="counter-number">2</div>
                      <div className="counter-number">0</div>
                      <div className="counter-number">5</div>
                      <div className="counter-number">7</div>
                      <div className="counter-number">5</div>
                    </div>
                    <div className="counter-heading">+</div>
                  </div>
                  <div className="our-quality-title">Partnerships</div> {/* label */}
                </div>
                {/* Quality Card 3 */}
                <div className="our-quality-card-wrap">
                  <div className="counter-number-wrapper">
                    <div className="counter-number-block lower-movement">
                      <div className="counter-number">1</div>
                      <div className="counter-number">2</div>
                      <div className="counter-number">3</div>
                      <div className="counter-number">4</div>
                      <div className="counter-number">1</div>
                    </div>
                    <div className="counter-number-block upper-movement">
                      <div className="counter-number">0</div>
                      <div className="counter-number">0</div>
                      <div className="counter-number">5</div>
                      <div className="counter-number">7</div>
                      <div className="counter-number">0</div>
                    </div>
                    <div className="counter-heading">+</div>
                  </div>
                  <div className="our-quality-title">Reviews</div>       {/* label */}
                </div>
                {/* Quality Card 4 */}
                <div className="our-quality-card-wrap">
                  <div className="counter-number-wrapper">
                    <div className="counter-number-block lower-movement">
                      <div className="counter-number">2</div>
                      <div className="counter-number">3</div>
                      <div className="counter-number">4</div>
                      <div className="counter-number">5</div>
                      <div className="counter-number">0</div>
                    </div>
                    <div className="counter-number-block upper-movement">
                      <div className="counter-number">5</div>
                      <div className="counter-number">1</div>
                      <div className="counter-number">2</div>
                      <div className="counter-number">3</div>
                      <div className="counter-number">5</div>
                    </div>
                    <div className="counter-heading">+</div>
                  </div>
                  <div className="our-quality-title">Affiliations</div> {/* label */}
                </div>
              </div>
              <Link to="/about" className="button-outline margin-top-60px w-button"> {/* about link */}
                Learn More
              </Link>
            </div>
            {/* About Banner */}
            <div className="home-about-banner-wrap">
              <div className="home-about-banner-image-block">
                <img
                  src={aboutBannerLarge}
                  loading="lazy"
                  sizes="(max-width: 479px) 100vw, (max-width: 767px) 66vw, (max-width: 991px) 63vw, (max-width: 1279px) 440px, (max-width: 1439px) 565px, (max-width: 1919px) 554px, 627px"
                  srcSet={`${aboutBanner500} 500w, ${aboutBannerLarge} 627w`}   {/* responsive */}
                  alt="Banner"
                  className="home-about-banner-image"
                />
              </div>
              <div className="about-banner-image-two">
                <img src={banner2} loading="lazy" alt="Banner" className="about-banner-two" /> {/* banner 2 */}
              </div>
              <img src={ellipseTop} loading="lazy" alt="Ellipse" className="ab-elipse-shape-top" /> {/* decor */}
              <img src={ellipseCenter} loading="lazy" alt="Ellipse" className="ab-elipse-shape-center" /> {/* decor */}
              <img src={ellipseBottom} loading="lazy" alt="Ellipse" className="ab-elipse-shape-bottom" /> {/* decor */}
            </div>
          </div>
          {/* video section */}
          <div className="w-layout-blockcontainer about-us-video w-container">
            <div className="video w-video w-embed"></div>               {/* placeholder */}
          </div>
        </div>
      </section>
      {/* About End */}

      {/* Brand Logo Section */}
      <section className="brand-logo-section padding-bottom-140px">
        <div className="w-layout-blockcontainer doctors-container w-container">
          <div className="brand-logo-main-wrapper">
            <div className="brand-logo-animation-wrapper">
              <div className="brand-logo-block">
                <div className="brand-logo-wrapper">
                  {logos.map((logo, index) => (                          // iterate logos
                    <div key={index} className="company-logo-block">
                      <img
                        src={logo}
                        loading="lazy"
                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 34vw, 180px"
                        alt="Company Logo"
                        className="company-logo"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Brand Logos End */}

      <Footer />                                                     {/* footer */}

      {/* Tooltip */}
      <button className="help-button" onClick={openPopup}>           {/* help btn */}
        Need Help?
      </button>
      {tooltipData && showPopup && (                                 // popup conditional
        <div className="modal-overlay" onClick={closePopup}>        {/* overlay */}
          <div className="modal-container" onClick={e => e.stopPropagation()}> {/* prevent close */}
            <button className="close-button" onClick={closePopup}>&times;</button> {/* close btn */}
            <h2>{tooltipData.title}</h2>                              {/* popup title */}
            <h3>{tooltipData.content.header}</h3>                     {/* popup header */}
            {tooltipData.content.sections.map((section, i) => (      // sections
              <div key={i}>
                <h4>{section.title}</h4>
                <p>{section.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Tooltip End */}
    </div>
  );
}
