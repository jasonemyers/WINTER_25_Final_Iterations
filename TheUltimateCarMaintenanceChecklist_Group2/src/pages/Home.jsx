import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';
import AOS from 'aos';        //AOS imports for animations/styling
import 'aos/dist/aos.css';         
import styles from '../../styles/pages/Home.module.css';

// Home page. The aesthetic landing page and the default directory/page
function Home({isLoggedIn}) {
  // Initialize AOS once on component mount
  useEffect(() => {
    AOS.init({ duration: 600 }); //animation duration
  }, []);

  return (
    <div className={styles["home-page"]}>
      <section className={styles["hero-section"]}>
        <div className={styles["hero-overlay"]} data-aos="fade-down">
          <h1 className={styles["hero-title"]}>The Ultimate Car Maintenance Checklist</h1>
          <p className={styles["hero-subtitle"]}>Keep Your Vehicle in Top Shape</p>
        </div>
      </section>

      <section className={styles["purpose-section"]} data-aos="fade-up">
        <h2>About Our Website</h2>
        <p>
          Welcome to Car Service Manager, your all-in-one platform for tracking and managing your vehicle’s
          maintenance schedule. Whether you need oil change reminders, mileage tracking, or a quick way to
          find local services, we’ve got you covered. Our goal is to keep you informed, organized, and safe
          on the road.
        </p>
      </section>

      <section className={styles["highlights-section"]}>
        <div className={styles["highlight"]} data-aos="fade-up" data-aos-delay="50">
          <h3>Preventive Tasks</h3>
          <p>
            Stay on top of crucial maintenance like oil changes, fluid checks, and tire rotations.
            Never miss a service interval again!
          </p>
        </div>
        <div className={styles["highlight"]} data-aos="fade-up" data-aos-delay="50">
          <h3>Service History</h3>
          <p>
            Log your past services and repairs, ensuring you have a complete maintenance record at your
            fingertips.
          </p>
        </div>
        <div className={styles["highlight"]} data-aos="fade-up" data-aos-delay="50">
          <h3>Find Local Mechanics</h3>
          <p>
            Enter your zipcode to discover nearby mechanic shops on an interactive map.
          </p>
        </div>
      </section>

      <section className={styles["cta-section"]} data-aos="fade-in" data-aos-delay="150">
        <h2>Ready to Get Started?</h2>
        <p>
          Add your vehicle to our platform and let us handle the reminders and tracking so you can focus
          on the road ahead.
        </p>
        <Link to="/create-account" className={styles["cta-button"]}>
          Create an account
        </Link>
        {!isLoggedIn ? <Link to="/sign-in" className={styles["cta-button"]}>
          Sign In
        </Link> : null}
      </section>
    </div>
  );
}

export default Home;
