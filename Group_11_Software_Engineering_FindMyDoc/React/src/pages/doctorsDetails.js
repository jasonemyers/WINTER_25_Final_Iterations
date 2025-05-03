import React, { useState, useEffect } from 'react'; // React and hooks
import { useParams, useNavigate, Link } from 'react-router-dom'; // router hooks

import Header from '../components/header'; // Header component
import Footer from '../components/footer'; // Footer component

import placeholderImage from '../assets/doctor.jpg'; // fallback image

const strapiBaseUrl = "https://findmydocmain-production.up.railway.app"; // API base

export default function DoctorsDetails() {
  const { documentId } = useParams(); // URL param for doctor
  const navigate       = useNavigate(); // navigation helper

  const [user,            setUser]            = useState(null); // current user
  const [doctor,          setDoctor]          = useState(null); // doctor data
  const [reviews,         setReviews]         = useState([]);   // list of reviews
  const [error,           setError]           = useState(null); // error message
  const [submittedReview, setSubmittedReview] = useState(null); // newly posted review

  const TAG_OPTIONS = [ // review tag choices
    'Friendly','Professional','Punctual',
    'Knowledgeable','Compassionate','Attentive',
    'Thorough','Efficient','Courteous',
    'Responsive','Empathetic','Trustworthy',
    'Patient','Organized','Clean',
    'Experienced','Rude','Unprofessional'
  ];

  // load user from storage on mount
  useEffect(() => {
    const raw = localStorage.getItem('user');
    if (raw) setUser(JSON.parse(raw)); // parse and set user
  }, []);

  // fetch doctor data when documentId changes
  useEffect(() => {
    if (!documentId) {
      setError("No documentId in URL"); // missing param
      return;
    }
    fetch(
      `${strapiBaseUrl}/api/doctors?filters[documentId][$eq]=${documentId}&populate=image`
    )
      .then(r => {
        if (!r.ok) throw new Error(`Doctor fetch failed: ${r.status}`); // HTTP error
        return r.json(); // parse JSON
      })
      .then(json => {
        const rec = Array.isArray(json.data) ? json.data[0] : json.data; // pick first
        if (!rec) throw new Error("Doctor not found"); // no record

        const doc = rec.attributes ?? rec; // flatten attributes
        const {
          title="No Name", specialty="", location="", education="",
          experience="", phone="", rating=0, description="", image
        } = doc; // pull fields

        // build image URL
        const rawUrl = image?.data?.attributes?.url || image?.url || "";
        const imageUrl = rawUrl.startsWith("http")
          ? rawUrl
          : rawUrl
            ? strapiBaseUrl + rawUrl
            : placeholderImage;

        setDoctor({ // set doctor state
          id: rec.id, title, specialty, location,
          education, experience, phone,
          rating: Math.floor(rating), description,
          imageUrl
        });
      })
      .catch(err => setError(err.message)); // handle errors
  }, [documentId]);

  // logout handler
  const handleLogout = () => {
    localStorage.removeItem('jwt'); // clear token
    localStorage.removeItem('user'); // clear user
    navigate('/sign-out'); // navigate away
  };

  if (error)   return <div>Error: {error}</div>;         // show error
  if (!doctor) return <div>Loading doctor…</div>;       // loading state

  return (
    <>
      <Header onLogout={handleLogout} user={user} />      {/* header */}

      <div className="doctor-content-wrapper">            {/* main wrapper */}
        {/* Profile Box */}
        <div className="doctor-profile-box">  
          <div className="doctor-image-box">
            <img
              src={doctor.imageUrl}
              alt={doctor.title}
              className="doctor-image"
            />                                               {/* doctor image */}
          </div>
          <div className="doctor-info-box">
            <h2>{doctor.title}</h2>                        {/* name */}
            <p><strong>Specialty:</strong> {doctor.specialty}</p>
            <p><strong>Location:</strong> {doctor.location}</p>
            <p><strong>Education:</strong> {doctor.education}</p>
            <p><strong>Experience:</strong> {doctor.experience}</p>
            <p><strong>Phone:</strong> {doctor.phone}</p>
            <p><strong>Rating:</strong> {'⭐'.repeat(doctor.rating)}</p>
            <p>{doctor.description}</p>                    {/* description */}
          </div>
        </div>

        {/* Reviews & Form Box */}
        <div className="doctor-reviews-box">
          <h3>Reviews</h3>
          <h3>Please Login To Leave A Review</h3>          {/* prompt */}

          {/* existing reviews */}
          {reviews.map(r => (
            <div key={r.id} className="review-item">
              <div className="review-header">
                <div className="review-rating">{'⭐'.repeat(r.rating)}</div>
                <div className="tag-options">
                  {r.tags.map(tag => (
                    <span key={tag} className="tag-badge">{tag}</span>
                  ))}                                       {/* tags */}
                </div>
              </div>
              <p>{r.content}</p>                            {/* comment */}
              <div className="review-author">
                {r.user}{r.phone && ` — ${r.phone}`}       {/* author */}
              </div>
            </div>
          ))}

          {/* review form when logged in and not yet submitted */}
          {user && !submittedReview && (
            <form
              className="review-form"
              onSubmit={e => {
                e.preventDefault();                     // prevent reload
                const form    = new FormData(e.target);
                const name    = form.get('name')?.trim() || 'Anonymous';
                const content = form.get('content')   || '';
                const phone   = form.get('phone')     || '';
                const tags    = form.getAll('tags'); 
                const rating  = Number(form.get('rating')) || 0;

                const newReview = {                     // build object
                  id:      Date.now(),
                  user:    name,
                  content,
                  phone,
                  tags,
                  rating,
                };

                setReviews(rs => [...rs, newReview]);   // append locally
                setSubmittedReview(newReview);          // flag submitted
                e.target.reset();                       // clear form
              }}
            >
              <h4>Leave a Review</h4>

              <label>
                Rating
                <select name="rating" required>        {/* rating dropdown */}
                  <option value="">Select…</option>
                  {[1,2,3,4,5].map(n => (
                    <option key={n} value={n}>{n} ⭐</option>
                  ))}
                </select>
              </label>

              <label htmlFor="reviewer-name">Name (optional)</label>
              <input                                    {/* optional name */}
                id="reviewer-name"
                name="name"
                type="text"
                placeholder="Leave blank for Anonymous"
              />
              <small className="form-help">
                If you don’t enter anything, we’ll display you as “Anonymous.”
              </small>

              <div className="tag-options">
                {TAG_OPTIONS.map(tag => (
                  <label key={tag} className="tag-checkbox">
                    <input type="checkbox" name="tags" value={tag} /> {tag}
                  </label>
                ))}                                     {/* tag checkboxes */}
              </div>

              <label>
                Review
                <textarea name="content" required />   {/* review text */}
              </label>

              <div className="form-buttons">
                <button type="submit" className="post-button">Post</button>
                <button
                  type="button"
                  className="cancel-button"
                  onClick={e => e.target.form.reset()} {/* cancel resets */}
                >
                  Cancel
                </button>
              </div>
            </form>
          )}

          {/* thank-you after submission */}
          {submittedReview && (
            <div className="review-thanks">
              <h4>Thank you for your review!</h4>  {/* confirmation */}
            </div>
          )}
        </div>

        <Link to="/doctors" className="button-primary">{/* back link */}
          ← Back to List
        </Link>
      </div>

      <Footer />                                        {/* footer */}
    </>
  );
}
