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
          <img src="/SlideshowImages/2_ Teak C-020.jpeg" alt="Slide 1" />
          <img src="/SlideshowImages/3_ Teak C-021 Pic 1.jpeg" alt="Slide 2" />
          <img src="/SlideshowImages/4_ Walnut C-011.JPG" alt="Slide 3" />
          <img src="/SlideshowImages/4_ walnut color C-022.jpeg" alt="Slide 4" />
          <img src="/SlideshowImages/6 _ teak C-010.jpeg" alt="Slide 5" />
          <img src="/SlideshowImages/6_ Teak C-010.jpeg" alt="Slide 6" />
          <img src="/SlideshowImages/Black 2 C-020.jpeg" alt="Slide 7" />
          <img src="/SlideshowImages/C-020 2 Oak.JPG" alt="Slide 8" />
          <img src="/SlideshowImages/c-021 3 chestnut.jpeg" alt="Slide 9" />
          <img src="/SlideshowImages/Chestnut 2 C-020.jpeg" alt="Slide 10" />
          <img src="/SlideshowImages/Gate c-014 Black 1_.jpeg" alt="Slide 11" />
          {/* <img src="/SlideshowImages/Teak 2 C-020 Pic 2.jpeg" alt="Slide 12" /> */}
          {/* <img src="/SlideshowImages/Teak 2_ C-020 Pic 3.jpeg" alt="Slide 13" />
          <img src="/SlideshowImages/Teak C-013 1_.JPG" alt="Slide 14" />
          <img src="/SlideshowImages/Walnut 4 C-011.jpeg" alt="Slide 15" /> */}
        </div>
        <div className={styles.logosSlide}>
        <img src="/SlideshowImages/2_ Teak C-020.jpeg" alt="Slide 1" />
          <img src="/SlideshowImages/3_ Teak C-021 Pic 1.jpeg" alt="Slide 2" />
          <img src="/SlideshowImages/4_ Walnut C-011.JPG" alt="Slide 3" />
          <img src="/SlideshowImages/4_ walnut color C-022.jpeg" alt="Slide 4" />
          <img src="/SlideshowImages/6 _ teak C-010.jpeg" alt="Slide 5" />
          <img src="/SlideshowImages/6_ Teak C-010.jpeg" alt="Slide 6" />
          <img src="/SlideshowImages/Black 2 C-020.jpeg" alt="Slide 7" />
          <img src="/SlideshowImages/C-020 2 Oak.JPG" alt="Slide 8" />
          <img src="/SlideshowImages/c-021 3 chestnut.jpeg" alt="Slide 9" />
          <img src="/SlideshowImages/Chestnut 2 C-020.jpeg" alt="Slide 10" />
          <img src="/SlideshowImages/Gate c-014 Black 1_.jpeg" alt="Slide 11" />
          {/* <img src="/SlideshowImages/Teak 2 C-020 Pic 2.jpeg" alt="Slide 12" /> */}
          {/* <img src="/SlideshowImages/Teak 2_ C-020 Pic 3.jpeg" alt="Slide 13" />
          <img src="/SlideshowImages/Teak C-013 1_.JPG" alt="Slide 14" />
          <img src="/SlideshowImages/Walnut 4 C-011.jpeg" alt="Slide 15" /> */}
        </div>
      </div>
    </div>
  );
};

export default Featured;
