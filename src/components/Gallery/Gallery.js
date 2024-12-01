import React from 'react';
import styles from './Gallery.module.css';
import '../general.module.css';

import gallery_photo_1 from '../../assets/imgs/gallery-01.png';
import gallery_photo_2 from '../../assets/imgs/gallery-02.png';
import gallery_photo_3 from '../../assets/imgs/gallery-03.jpg';
import gallery_photo_4 from '../../assets/imgs/gallery-04.png';
import gallery_photo_5 from '../../assets/imgs/gallery-05.jpg';
import gallery_photo_6 from '../../assets/imgs/gallery-06.png';

const Gallery = () => {
  // Array of imported image variables
  const galleryImages = [
    gallery_photo_1,
    gallery_photo_2,
    gallery_photo_3,
    gallery_photo_4,
    gallery_photo_5,
    gallery_photo_6
  ];

  return (
    <div className={styles.gallery} id="gallery">
      <h2 className={styles.mainTitle}>Gallery</h2>
      <div className={styles.container}>
        {galleryImages.map((image, index) => (
          <div key={index} className={styles.box}>
            <div className={styles.image}>
              <img src={image} alt={`gallery_image  ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
