// Services.js
import React from 'react';
import styles from './Services.module.css';
import '../general.module.css'

import '@fortawesome/fontawesome-free/css/all.min.css';

const Services = () => {
  return (
    <div className={styles.services} id="services">
      <h2 className={styles.mainTitle}>Services</h2>
      <div className={styles.container}>
        {[
          { icon: 'fas fa-user-shield', title: 'Security' },
          { icon: 'fas fa-tools', title: 'Fixing Issues' },
          { icon: 'fas fa-map-marked-alt', title: 'Location' },
          { icon: 'fas fa-laptop-code', title: 'Coding' },
          { icon: 'fas fa-palette', title: 'Design' },
          { icon: 'fas fa-bullhorn', title: 'Marketing' },
        ].map((service, index) => (
          <div key={index} className={styles.box}>
            <i className={`${service.icon} fa-4x`}></i>
            <h3>{service.title}</h3>
            <div className={styles.info}>
              <a href="/">Details</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
