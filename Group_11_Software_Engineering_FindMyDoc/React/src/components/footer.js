import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

export default function Footer() {
  return (
    <section className="footer-section">
      <div className="w-layout-blockcontainer doctors-container footer-container w-container">
        <div className="footer-block-wrapper">
          <div className="footer-content">
            <div className="footer-block">
              <Link to="/" className="footer-logo-link-block w-inline-block">
                <h1 className="heading">
                  <span className="text-span">F</span>ind
                  <span className="text-span-2">M</span>y
                  <span className="text-span-3">D</span>oc
                </h1>
              </Link>
              <div className="footer-address">
                Empowering wellness through knowledge and care
              </div>
            </div>
          </div>
          <div className="copy-right-block">
            <div className="footer-copyright-center">
              Copyright ©{' '}
              <Link to="/" className="template-link">
                FindMyDoc
              </Link>
              | Designed by{' '}
              <a href="#" target="_blank" rel="noopener noreferrer" className="brandbes-link">
                Amy, Yassir, Austin, Ayman, Connor
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}