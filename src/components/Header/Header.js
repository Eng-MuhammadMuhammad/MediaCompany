import React from 'react';
import { useState, useEffect } from 'react';
import styles from './Header.module.css';

import '../general.module.css'


import megamenuphoto from '../../assets/imgs/megamenu.png'


const Header = () => {
  
  
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Load theme preference from local storage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.body.classList.add(styles.dark);
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add(styles.dark);
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove(styles.dark);
      localStorage.setItem('theme', 'light');
    }
  };
  return (
    <div className={styles.header} id="header">
      <div className={styles.container}>
        <a href="/" className={styles.logo}>OAX</a>
         {/* Dark Mode Toggle Button in the Middle */}
         <button className={styles.toggleButton} onClick={toggleTheme}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <ul className={styles.mainNav}>
          <li><a href="#articles">Articles</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#features">Features</a></li>
          <li>
            <a href="/">Other Links</a>
            <div className={styles.megaMenu}>
              <div className={styles.image}>
              <img src={megamenuphoto} alt="" />
              </div>
              <ul className={styles.links}>
                <li><a href="#testimonials"><i className="far fa-comments fa-fw"></i> Testimonials</a></li>
                <li><a href="#team"><i className="far fa-user fa-fw"></i> Team Members</a></li>
                <li><a href="#services"><i className="far fa-building fa-fw"></i> Services</a></li>
                <li><a href="#our-skills"><i className="far fa-check-circle fa-fw"></i> Our Skills</a></li>
                <li><a href="#work-steps"><i className="far fa-clipboard fa-fw"></i> How It Works</a></li>
              </ul>
              <ul className={styles.links}>
                <li><a href="#events"><i className="far fa-calendar-alt fa-fw"></i> Events</a></li>
                <li><a href="#pricing"><i className="fas fa-server fa-fw"></i> Pricing Plans</a></li>
                <li><a href="#video"><i className="far fa-play-circle fa-fw"></i> Top Videos</a></li>
                <li><a href="#stats"><i className="far fa-chart-bar fa-fw"></i> Stats</a></li>
                <li><a href="#discount"><i className="fas fa-percent fa-fw"></i> Request A Discount</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
