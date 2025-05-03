import React from 'react';                           // React core
import { Link } from 'react-router-dom';             // client-side navigation
import '../styles.css';                              // global styles

export default function Dashboard() {
  const storedUser = localStorage.getItem('user');  // retrieve user data
  const user = storedUser
    ? JSON.parse(storedUser)                        // parse JSON if exists
    : null;                                         // else null

  return (
    <div
      className="dashboardPage"
      style={{ textAlign: 'center', padding: '50px' }}  // inline centering & padding
    >
      {/* personalized welcome */}
      <h1>
        Welcome{' '}
        {user && user.username                            // check username
          ? user.username                                 // show name
          : 'Guest'}                                      // fallback
        !
      </h1>

      {/* dashboard description */}
      <p>
        This is your dashboard where you can view your profile,
        appointments, and more.
      </p>

      {/* navigation back home */}
      <p>
        <Link to="/">Return to Home</Link>
      </p>
    </div>
  );
}
