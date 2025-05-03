import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const [search, setSearch] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = `?name=${encodeURIComponent(search)}&specialty=${encodeURIComponent(specialty)}&location=${encodeURIComponent(location)}`;
    navigate(`/doctors${query}`);
  };

  return (
    <div id="Scroll-Top" className="page-wrapper home-page">
      <div className="main-wrapper">
        <section className="hero-section-one">
          <div className="w-layout-blockcontainer doctors-container w-container">
            <div className="hero-section-one-wrapper">
              <div className="hero-one-content-wrap">
                <h1 className="hero-title">
                  Find the best <span className="hero-title-span">doctors </span>near you
                </h1>
                <p className="hero-title-description">
                  Discover top-rated doctors, read real patient reviews, and book appointments with ease.
                  FindMyDoc connects you with trusted healthcare professionals to ensure you receive the best care.
                </p>
                <img src="/images/dr-cart.png" alt="Doctor Card" className="dr-list-card" />
                <img src="/images/hero-oneround-shape.svg" alt="Rounded Shape" className="hero-one-rounded-shape" />

                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Search by name"
                    className="filter-input"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Filter by specialty"
                    className="filter-input"
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Filter by location"
                    className="filter-input"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                  <button type="submit" className="search-button">Search</button>
                </form>
              </div>

              <div className="hero-one-banner-wrap">
                <img src="/images/banner-dr-img.png" alt="Banner" className="hero-one-banner-image" />
              </div>

              <img
                src="/images/hero-one-rectangle_1hero-one-rectangle.png"
                alt="Rectangle Shape"
                className="hero-bg-rectangle-shape"
              />
            </div>
          </div>
          <div className="hero-section-one-bg-shape"></div>
        </section>
      </div>
    </div>
  );
}
