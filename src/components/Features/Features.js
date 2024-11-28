import React from 'react';
import styles from './Features.module.css';

const Features = () => {
  return (
    <div className={styles.features} id="features">
      <h2 className={styles.mainTitle}>Our Core Features</h2>
      <div className={styles.container}>
        
        {/* Quality Box */}
        <div className={`${styles.box} ${styles.quality}`}>
          <div className={styles.imagHolder}>
            <img src="/imgs/features-01.jpg" alt="Quality" />
          </div>
          <h2>Quality Assurance</h2>
          <p>We prioritize top-notch quality in every project, ensuring that our services meet rigorous standards to deliver excellence you can trust.</p>
          <a href="/">Learn More</a>
        </div>

        {/* Time Box */}
        <div className={`${styles.box} ${styles.time}`}>
          <div className={styles.imagHolder}>
            <img src="/imgs/features-02.jpg" alt="Time" />
          </div>
          <h2>Timely Delivery</h2>
          <p>Time is of the essence. Our team is committed to meeting deadlines and delivering results promptly without compromising quality.</p>
          <a href="/">Discover More</a>
        </div>

        {/* Passion Box */}
        <div className={`${styles.box} ${styles.passion}`}>
          <div className={styles.imagHolder}>
            <img src="/imgs/features-03.jpg" alt="Passion" />
          </div>
          <h2>Passion Driven</h2>
          <p>Our passion for innovation and creativity drives us to exceed expectations and achieve remarkable results for our clients.</p>
          <a href="/">Explore More</a>
        </div>

      </div>
    </div>
  );
};

export default Features;
