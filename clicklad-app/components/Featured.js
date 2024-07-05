'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './Featured.module.css';

const images = [
  '/SlideshowImages/Slideshow-1.png',
  '/SlideshowImages/Slideshow-2.png',
  '/SlideshowImages/Slideshow-3.png',
  '/SlideshowImages/Slideshow-4.png',
  '/SlideshowImages/Slideshow-5.png',
  '/SlideshowImages/Slideshow-6.png',
  '/SlideshowImages/Slideshow-7.png',
];

const Featured = () => {
  const [isHovered, setIsHovered] = useState(false);
  const slideshowRef = useRef(null);

  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        if (slideshowRef.current) {
          slideshowRef.current.scrollLeft += slideshowRef.current.clientWidth / 4;
          if (slideshowRef.current.scrollLeft >= slideshowRef.current.scrollWidth - slideshowRef.current.clientWidth) {
            slideshowRef.current.scrollLeft = 0;
          }
        }
      }, 2000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovered]);

  return (
    <div className={styles.featured}>
      <h2 className={styles.title}>Featured Projects</h2>
      <p className={styles.description}>
        We have completed a wide range of cladding projects for various industries, including commercial, residential, healthcare, education, hospitality, and more.
      </p>
      <div 
        className={styles.slideshow} 
        ref={slideshowRef} 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={styles.slideshowInner}>
          {images.map((src, index) => (
            <div className={styles.imageContainer} key={index}>
              <img src={src} alt={`Project ${index + 1}`} className={styles.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
