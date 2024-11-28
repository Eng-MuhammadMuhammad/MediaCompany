// Events.js

import React from 'react';
import styles from './Events.module.css';

const Events = () => {
  return (
    <div className={styles.events} id="events">
      <h2 className={styles.mainTitle}>Upcoming Tech Conference 2024</h2>
      <div className={styles.container}>
        <img src="imgs/events.png" alt="Tech Conference_Image" />
        <div className={styles.info}>
          <div className={styles.time}>
            <div className={styles.unit}>
              <span>10</span>
              <span>  </span>
              <span>Days</span>
            </div>
            <div className={styles.unit}>
              <span>06</span>
              <span>  </span>
              <span>Hours</span>
            </div>
            <div className={styles.unit}>
              <span>30</span>
              <span>  </span>
              <span>Minutes</span>
            </div>
            <div className={styles.unit}>
              <span>15</span>
              <span>  </span>
              <span>Seconds</span>
            </div>
          </div>
          <h2 className={styles.title}>Join Us in San Francisco</h2>
          <p className={styles.description}>
            Be part of the biggest tech event of the year! Network with industry leaders, attend workshops on
            the latest trends in AI, cybersecurity, and software development, and gain insights into the future of technology. 
            Don’t miss out on this incredible opportunity to grow your skills and connect with innovators from around the globe.
          </p>
        </div>
        <div className={styles.subscribe}>
          <form>
            <input type="email" placeholder="Enter your Email Here" />
            <input type="submit" value="Subscribe" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Events;
