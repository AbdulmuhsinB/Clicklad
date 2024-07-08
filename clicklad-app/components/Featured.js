// components/Featured.js
'use client';

import { useEffect } from 'react';
import styles from './Featured.module.css';

const Featured = () => {
  useEffect(() => {
    const logosSlide = document.querySelector(`.${styles.logosSlide}`);
    console.log('logosSlide:', logosSlide);
    
    if (logosSlide) {
      const copy = logosSlide.cloneNode(true);
      console.log('copy:', copy);
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
          <img src="/SlideshowImages/Slideshow-1.png" alt="Slide 1" />
          <img src="/SlideshowImages/Slideshow-2.png" alt="Slide 2" />
          <img src="/SlideshowImages/Slideshow-3.png" alt="Slide 3" />
          <img src="/SlideshowImages/Slideshow-4.png" alt="Slide 4" />
          <img src="/SlideshowImages/Slideshow-5.png" alt="Slide 5" />
          <img src="/SlideshowImages/Slideshow-6.png" alt="Slide 6" />
          <img src="/SlideshowImages/Slideshow-7.png" alt="Slide 7" />
        </div>
        <div className={styles.logosSlide}>
          <img src="/SlideshowImages/Slideshow-1.png" alt="Slide 1" />
          <img src="/SlideshowImages/Slideshow-2.png" alt="Slide 2" />
          <img src="/SlideshowImages/Slideshow-3.png" alt="Slide 3" />
          <img src="/SlideshowImages/Slideshow-4.png" alt="Slide 4" />
          <img src="/SlideshowImages/Slideshow-5.png" alt="Slide 5" />
          <img src="/SlideshowImages/Slideshow-6.png" alt="Slide 6" />
          <img src="/SlideshowImages/Slideshow-7.png" alt="Slide 7" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
