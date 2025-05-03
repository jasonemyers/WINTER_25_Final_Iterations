import React from 'react';
import { Link } from 'react-router-dom';

export default function SiteHeader() {
  return (
    // Wrap everything in a parent element or React Fragment <>
    <section className="header-section position-absoulate">
      <div className="header w-nav" role="banner">
        <div className="top-header">
          <div className="top-bar header-wrapper">
            <div className="header-container w-container">
              <div className="top-bar-flex">
                <div>
                  <h1 className="heading">
                    <span className="text-span">F</span>ind
                    <span className="text-span-2">M</span>y
                    <span className="text-span-3">D</span>oc
                  </h1>
                  <div className="text-block">Yassir, Amy, Connor, Emily, Austin</div>
                </div>
                <div className="phone-menu">
                  <div className="top-div-box">
                    <img src="images/icons8-medical-50_1icons8-medical-50.png" loading="lazy" alt="" className="top-link-image" />
                    <Link to="/doctors-sign-in" className="top-link">FindMyDoc for Professionals</Link>
                  </div>
                  <div className="top-div-box">
                    <img src="images/icons8-account-50_1icons8-account-50.png" loading="lazy" width="74" alt="" className="top-link-image" />
                    <Link to="/sign-in" className="link">Account Sign in</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="header-container w-container">
              <div className="header-content">
                <Link to="/" className="header-logo w-nav-brand"></Link>
                <div className="div-block-14">
                  <nav role="navigation" className="header-men-wrapper w-nav-menu">
                    <div className="div-block-15">
                      <ul role="list" className="brix---header-nav-menu-list">
                        <li className="brix---header-nav-list-item">
                          <Link to="/" className="brix---header-nav-link w-nav-link">Home</Link>
                        </li>
                        <li className="brix---header-nav-list-item">
                          <Link to="/about" className="brix---header-nav-link w-nav-link">About</Link>
                        </li>
                        <li className="brix---header-nav-list-item">
                        <Link to="/doctors" className="brix---header-nav-link w-nav-link">Doctors</Link>                        
                        </li>
                        <li className="brix---header-nav-list-item">
                          <Link to="/blog" className="brix---header-nav-link w-nav-link">Blog</Link>
                        </li>
                        <li className="brix---header-nav-list-item">
                          <Link to="/contact" className="brix---header-nav-link w-nav-link">Contact</Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                  <div className="hamburger w-nav-button">
                    <div className="hamberguer-menu"></div>
                    <div className="hamburger-menu-bar"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
