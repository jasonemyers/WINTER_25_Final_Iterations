import React, { useState, useEffect } from 'react';                 // React core and hooks
import { useNavigate, Link, useLocation } from 'react-router-dom';  // router utilities

// Assets
import iconsMedical from '../assets/icons8-medical-50_1icons8-medical-50.png'; // icon assets
import iconsAccount from '../assets/icons8-account-50_1icons8-account-50.png';
import insideVectorSemiSmall from '../assets/Inside-vector-semi-small.svg'; 
import insideVectorSmall from '../assets/Inside-vector-small.svg';
import insideVectorMedium from '../assets/Inside-vector-medium.svg';
import insideVectorLarge from '../assets/Inside-vector-large.svg';
import insideVectorSemiLarge from '../assets/Inside-vector-semi-large.svg';
import outsideVectorLarge from '../assets/Outside-vector-large.svg';
import locationIcon from '../assets/location.svg';
import drIcon from '../assets/dr-icon.svg';
import Header from '../components/header';                            // header component
import Footer from '../components/footer';                            // footer component

function useQuery() {
  return new URLSearchParams(useLocation().search);                 // parse URL query params
}

export default function Doctors() {
  const [user, setUser] = useState(null);                           // current user
  const navigate = useNavigate();                                   // navigate helper
        
  useEffect(() => {
    const storedUser = localStorage.getItem('user');                // get user from storage
    if (storedUser) {
      setUser(JSON.parse(storedUser));                              // set user state
    }
  }, []);                                                           // run once on mount
      
  const handleLogout = () => {
    localStorage.removeItem('jwt');                                // clear token
    localStorage.removeItem('user');                               // clear user
    setUser(null);                                                 // reset state
    navigate('/sign-out');                                         // redirect
  };

  const query = useQuery();                                         // access query params

  // States for fetched data and status
  const [doctors, setDoctors] = useState([]);                       // list of doctors
  const [loading, setLoading] = useState(true);                     // loading flag
  const [error, setError] = useState(null);                         // error state

  // States for filters
  const [search, setSearch] = useState(query.get("name") || "");    // filter by name
  const [specialty, setSpecialty] = useState(query.get("specialty") || ""); // filter by specialty
  const [location, setLocation] = useState(query.get("location") || "");   // filter by location

  // Pagination state
  const [page, setPage] = useState(1);                              // current page
  const doctorsPerPage = 15;                                        // items per page

  // Base URL for Strapi images
  const strapiBaseUrl = "https://findmydocmain-production.up.railway.app"; // API base

  // Fetch doctors data on mount
  useEffect(() => {
    fetch(`${strapiBaseUrl}/api/doctors?populate=*&pagination[pageSize]=100`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');          // network error
        }
        return response.json();                                     // parse JSON
      })
      .then(data => {
        console.log('Fetched data:', data);                         // debug log
        setDoctors(data.data || []);                                // set doctors list
        setLoading(false);                                          // done loading
      })
      .catch(err => {
        console.error('Fetch error:', err);                         // log error
        setError(err);                                              // set error state
        setLoading(false);                                          // done loading
      });
  }, [strapiBaseUrl]);                                              // depend on base URL

  const startIndex = (page - 1) * doctorsPerPage;                   // calculate start index
  const endIndex = startIndex + doctorsPerPage;                     // calculate end index

  const filteredDoctors = doctors.filter(doctor => {                // apply search filters
    const name = doctor.title?.toLowerCase() || '';
    const spec = doctor.specialty?.toLowerCase() || '';
    const loc = doctor.Location?.toLowerCase() || '';

    const searchMatch = name.includes(search.toLowerCase());
    const specialtyMatch = specialty ? spec.includes(specialty.toLowerCase()) : true;
    const locationMatch = location ? loc.includes(location.toLowerCase()) : true;

    return searchMatch && specialtyMatch && locationMatch;          // keep if all match
  });

  const paginatedDoctors = filteredDoctors.slice(startIndex, endIndex); // slice for pagination

  return (
    <>
      <Header />                                                   {/* full-width header */}

      {/* Breadcrumb Section */}
      <section className="breadcrumb-section-doctor">
        <div className="w-layout-blockcontainer doctors-container w-container">
          <div className="breadcrumb-wrapper">
            <div className="breadcrumb-title-block">
              <h1 className="breadcumb-title">Doctors</h1>         {/* page title */}
              <div className="home-page-back-link-wrap">
                <Link to="/" className="page-link">Home</Link>    {/* home link */}
                <div className="divider">/</div>
                <div className="page-name">Doctors</div>         {/* current page */}
              </div>
            </div>
            <div className="breadcrumb-shape-block">
              <div className="inside-vector-wrap">
                {/* decorative vectors */}
                <img src={insideVectorSemiSmall} loading="lazy" alt="Vector" className="inside-vector-semi-small" />
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

      {/* Main Content Section */}
      <section>
        <div className="doctors-search-container">
          <div className="filters">
            {/* Search by Name */}
            <div className="search-block">
              <input
                className="search w-input"
                maxLength="256"
                placeholder="Search for a doctor..."
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}        // update search
              />
            </div>
            {/* Location */}
            <div className="location">
              <div className="location-icon-wrap">
                <img src={locationIcon} alt="Location Icon" className="location-icon" />
              </div>
              <input
                className="search location-serach w-input"
                maxLength="256"
                placeholder="Search by city..."
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}     // update location
              />
            </div>
            {/* Specialty search */}
            <div className="speciality">
              <div className="dr-icon-wrap">
                <img src={drIcon} alt="Dr Icon" className="dr-icon" />
              </div>
              <input
                type="text"
                placeholder="Search by specialty"
                className="filter-input"
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}    // update specialty
              />
            </div>
          </div>

          {/* Doctor Cards List */}
          <div className="doctorCardsContainer">
            {paginatedDoctors.map(doctor => {
              const rawUrl = doctor.image?.url;                    // get image path
              const imageUrl = rawUrl?.startsWith('http')          // build full URL
                ? rawUrl
                : rawUrl
                  ? strapiBaseUrl + rawUrl
                  : 'https://via.placeholder.com/150';            // fallback image

              return (
                <div key={doctor.id} className="doctorCard">      {/* single card */}
                  {/* Avatar Section */}
                  <div className="doctorCardAvatar">
                    <img 
                      src={imageUrl} 
                      alt={doctor.title} 
                      className="doctorCardAvatarImage" 
                    />
                  </div>

                  {/* Info Section */}
                  <div className="doctorCardInfo">
                    <h2 className="doctorCardName">{doctor.title}</h2>
                    <p className="doctorCardSpecialty">{doctor.specialty}</p>
                    <p className="doctorCardSpecialty">{doctor.city}</p>
                    <div className="doctorCardRating">
                      Rating: ⭐ {doctor.rating}                       {/* rating display */}
                    </div>
                  </div>

                  {/* Link Section */}
                  <div className="doctorCardLink">
                    <Link to={`/doctorsDetails/${doctor.documentId}`} className="doctorCardProfileLink">
                      View Profile                                  {/* profile link */}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination */}
          <div className="pagination">
            <button 
              className="back-button" 
              onClick={() => setPage(prev => Math.max(prev - 1, 1))} // prev page
              disabled={page === 1}
            >
              &larr;                                              {/* back arrow */}
            </button>
            <span>Page {page}</span>                              {/* page indicator */}
            <button
              className="next-button"
              onClick={() => setPage(prev => prev + 1)}            // next page
              disabled={endIndex >= filteredDoctors.length}
            >
              &rarr;                                              {/* next arrow */}
            </button>
          </div>

        </div>
      </section>

      <Footer />                                                   {/* full-width footer */}
    </>
  );
}
