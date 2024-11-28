import React from 'react';
import styles from './Gallery.module.css';
import '../general.module.css'

const Gallery = () => {
  return (
    <div className={styles.gallery} id="gallery">
      <h2 className={styles.mainTitle}>Gallery</h2>
      <div className={styles.container}>
        {['gallery-01.png', 'gallery-02.png', 'gallery-03.jpg', 'gallery-04.png', 'gallery-05.jpg', 'gallery-06.png'].map((image, index) => (
          <div key={index} className={styles.box}>
            <div className={styles.image}>
              <img src={`imgs/${image}`} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
