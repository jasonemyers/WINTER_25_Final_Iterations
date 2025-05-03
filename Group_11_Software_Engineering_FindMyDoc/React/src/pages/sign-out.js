import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

export default function SignOut() {
  return (
    <div className="signOutPage" style={{ textAlign: 'center', padding: '50px' }}>
      <h1>You are now signed out.</h1>
      <p>
        <Link to="/">Return to Home</Link>
      </p>
    </div>
  );
}
