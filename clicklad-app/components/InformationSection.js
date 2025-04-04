'use client';

import React, { useState, useEffect, useRef } from 'react';
import NumberCounter from './NumberCounter'; // Adjust the path if necessary
import styles from './InformationSection.module.css';

const InformationSection = () => {
  const [isImageVisible, setImageVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setImageVisible(true);
            observer.disconnect(); // Stop observing after it becomes visible
          }
        });
      },
      {
        threshold: 0.1 // Trigger when 10% of the element is visible
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <section className={styles.informationSection}>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img
            ref={imageRef}
            src="/Home-Page/323 Huntly drive.jpg"
            alt="Innovative Aluminum Solutions"
            className={`${styles.image} ${isImageVisible ? styles.visible : ''}`} // Add visible class if isVisible is true
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Innovative Aluminum Products</h1>
          <p className={styles.description}>
          Clicklad is redefining the aluminum cladding space by innovating the installation process, and allowing architects and designers to achieve unique looks that were once thought to be a challenge to achieve. With our proprietary mounting system, you are able to achieve a look that makes your project stand out. Aluminum is durable, maintenance free and is built to withstand the harsh Canadian weather
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.numberContainer}>
                <NumberCounter endNumber={10} duration={2000}/>
                <span className={styles.number}>+</span>
              </div>
              <div className={styles.statTitle}>YEARS EXPERIENCE</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.numberContainer}>
                <NumberCounter endNumber={3500} duration={2000}/>
                <span className={styles.number}>+</span>
              </div>
              <div className={styles.statTitle}>SATISFIED CUSTOMERS</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.numberContainer}>
                <NumberCounter endNumber={36} duration={2000}/>
              </div>
              <div className={styles.statTitle}>AWARD WON</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.numberContainer}>
                <NumberCounter endNumber={20} duration={2000}/>
              </div>
              <div className={styles.statTitle}>PRODUCTS & FINISHES</div>
            </div>
          </div>
          <a href="/about-us">
          <button className={styles.contactButton} href="/about-us">Contact Us</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InformationSection;
