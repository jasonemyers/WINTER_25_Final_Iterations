import React from 'react';
import NearestMechanicShops from '../components/NearestMechanicShops';
import styles from '../../styles/pages/LocalServices.module.css'

// Local Services Page. Shows map and local mechanic shops.
function LocalServices() {
  return (
    <div className={`${styles.intro} ${styles.map}`}>
      <h3>Find Local Services</h3>
      <p>Discover local mechanic shops near you by entering your zipcode.</p>
      <NearestMechanicShops />
    </div>
  );
}

export default LocalServices;
