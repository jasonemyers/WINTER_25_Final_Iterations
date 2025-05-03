import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/components/NavBar.module.css';
import { useContext } from 'react';
import ThemeContext from '../assets/ThemeContext';

// How the user can navigate the various pages
function NavBar(props) {
  const [vehicleSelected, setVehicleSelected, userData, setUserData] = useContext(ThemeContext);
  
  function logUserOut(){
    localStorage.setItem("user","");
    setUserData(null);
    props.changeloginstatus(false);
    setVehicleSelected(null);
  }

  // If user is not logged in, show default navigation bar
  if (!props.isLoggedIn){
    return (
      <nav className={styles.navbar}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sign-in">Sign In</Link></li>
        <li><Link to="/create-account">Create Account</Link></li>
      </ul>
    </nav>
    );
  }
  return (
    <nav className={styles.navbar}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/service-history">Service History</Link></li>
        <li><Link to="/service-intervals">Service Intervals</Link></li>
        <li><Link to="/mileage-tracking">Mileage Tracking</Link></li>
        <li><Link to="/push-notifications">Push Notifications</Link></li>
        <li><Link to="/local-services">Local Services</Link></li>
        <li><Link to="/AskForHelp">Robot Support</Link></li>
        <li><Link to='/' onClick={logUserOut}>Log Out</Link></li>

      </ul>
    </nav>
  );
}

export default NavBar;
