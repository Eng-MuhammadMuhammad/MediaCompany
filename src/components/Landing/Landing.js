import React from 'react';
import styles from './Landing.module.css';

import landingphoto from '../../assets/imgs/landing-image.png'

const Landing = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1>Welcome, To OAX Agency</h1>
          <p>
            Here I am gonna share everything about my life. Books I am reading,
            Games I am playing, Stories and Events
          </p>
        </div>
        <div className={styles.image}>
          {/* The img element will apply the "up-and-down" animation */}
          <img src={landingphoto} alt="Landing" />
        </div>
      </div>
      <a href="#articles" className={styles.goDown}>
        {/* The icon will apply the "bouncing" animation */}
        <i className="fas fa-angle-double-down fa-2x"></i>
      </a>
    </div>
  );
};

export default Landing;
