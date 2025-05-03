import React, { useEffect } from 'react';

function AuthManager() {
  useEffect(() => {
    console.log('Auth script loaded'); // Debug 1

    const user = JSON.parse(localStorage.getItem('user'));
    console.log('User from localStorage:', user); // Debug 2

    const signinContainer = document.getElementById('signin-container');
    const loggedinContainer = document.getElementById('loggedin-container');
    const userNameSpan = document.getElementById('user-name');
    const logoutBtn = document.getElementById('logout-btn');

    console.log('Elements:', { signinContainer, loggedinContainer, userNameSpan, logoutBtn }); // Debug 3

    if (!signinContainer || !loggedinContainer || !userNameSpan || !logoutBtn) return;

    if (user && user.username) {
      signinContainer.style.display = 'none';
      loggedinContainer.style.display = 'flex';
      userNameSpan.textContent = user.username;
    } else {
      signinContainer.style.display = 'block';
      loggedinContainer.style.display = 'none';
    }

    logoutBtn.addEventListener('click', function() {
      localStorage.removeItem('jwt');
      localStorage.removeItem('user');
      window.location.href = 'index.html';
    });
  }, []);

  return null;
}

export default AuthManager;
