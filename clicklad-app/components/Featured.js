'use client';

import { useEffect } from 'react';
import styles from './Featured.module.css';

const Featured = () => {
  useEffect(() => {
    const logosSlide = document.querySelector(`.${styles.logosSlide}`);
    
    if (logosSlide) {
      const copy = logosSlide.cloneNode(true);
      document.querySelector(`.${styles.logos}`).appendChild(copy);
    }
  }, []);
  
  return (
    <div className={styles.featured}>
      <h1 className={styles.heading}>Featured Projects</h1>
      <div className={styles.description}>
        <p>We have completed a wide range of cladding projects for various industries, including commercial, residential, healthcare, education, hospitality, and more.</p>
      </div>
      <div className={styles.logos}>
        <div className={styles.logosSlide}>
          <img src="/SlideshowImages/6-inch-teak.jpeg" alt="Slide 1" />
          <img src="/SlideshowImages/6-inches.jpeg" alt="Slide 2" />
          <img src="/SlideshowImages/7612-Flight-ave.jpeg" alt="Slide 3" />
          <img src="/SlideshowImages/c-014-Orange-county.jpeg" alt="Slide 4" />
          <img src="/SlideshowImages/c-014-white-oak.jpeg" alt="Slide 5" />
          <img src="/SlideshowImages/c-021-3-chestnut.jpeg" alt="Slide 6" />
          <img src="/SlideshowImages/Elvido-Dr-2-Teak-color-wall-and-soffit.jpeg" alt="Slide 7" />
          <img src="/SlideshowImages/Hotel_led-light.jpg" alt="Slide 8" />
          <img src="/SlideshowImages/IMG_8780.JPG" alt="Slide 9" />
          <img src="/SlideshowImages/IMG_8880.JPG" alt="Slide 10" />
          <img src="/SlideshowImages/WhatsApp-Image-2024-05-15-at-10.56.06-AM.jpeg" alt="Slide 11" />
        </div>
        <div className={styles.logosSlide}>
          <img src="/SlideshowImages/6-inch-teak.jpeg" alt="Slide 1" />
          <img src="/SlideshowImages/6-inches.jpeg" alt="Slide 2" />
          <img src="/SlideshowImages/7612-Flight-ave.jpeg" alt="Slide 3" />
          <img src="/SlideshowImages/c-014-Orange-county.jpeg" alt="Slide 4" />
          <img src="/SlideshowImages/c-014-white-oak.jpeg" alt="Slide 5" />
          <img src="/SlideshowImages/c-021-3-chestnut.jpeg" alt="Slide 6" />
          <img src="/SlideshowImages/Elvido-Dr-2-Teak-color-wall-and-soffit.jpeg" alt="Slide 7" />
          <img src="/SlideshowImages/Hotel_led-light.jpg" alt="Slide 8" />
          <img src="/SlideshowImages/IMG_8780.JPG" alt="Slide 9" />
          <img src="/SlideshowImages/IMG_8880.JPG" alt="Slide 10" />
          <img src="/SlideshowImages/WhatsApp-Image-2024-05-15-at-10.56.06-AM.jpeg" alt="Slide 11" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
