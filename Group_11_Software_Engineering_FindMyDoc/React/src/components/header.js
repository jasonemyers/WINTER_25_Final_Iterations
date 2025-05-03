import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles.css';

// Header assets
import iconsMedical from '../assets/icons8-medical-50_1icons8-medical-50.png';
import iconsAccount from '../assets/icons8-account-50_1icons8-account-50.png';

export default function Header() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/sign-out');
  };

  return (
    <section className="header-section position-absolute">
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
                    <img src={iconsMedical} loading="lazy" alt="" className="top-link-image" />
                    <Link to="/doctors-sign-in" className="top-link">FindMyDoc for Professionals</Link>
                  </div>
                  <div className="top-div-box">
                    <img src={iconsAccount} loading="lazy" width="74" alt="" className="top-link-image" />
                    {user ? (
                      <>
                        <button className="sign-out" onClick={handleLogout}>
                          Sign Out
                        </button>
                        <Link to="/dashboard" className="dashboard-button">
                          Dashboard
                        </Link>
                      </>
                    ) : (
                      <Link to="/sign-in" className="dashboard-button">
                        Account Sign in
                      </Link>
                    )}
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