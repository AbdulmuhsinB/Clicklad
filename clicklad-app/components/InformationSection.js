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
            src="/Home-Page/House.jpg"
            alt="Innovative Aluminum Solutions"
            className={`${styles.image} ${isImageVisible ? styles.visible : ''}`} // Add visible class if isVisible is true
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Innovative Aluminum Products</h1>
          <p className={styles.description}>
            <span className={styles.highlight}>Clicklad™</span> is a cladding material based on recycled aluminum that comes in a variety of sizes and cladding options. In the stages of thinking about the product, we were faced with several goals such as: installation time, product efficiency for weather conditions, system weight, and more. We are confident that we have managed to meet the requirements and challenges at the highest level.
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
          <button className={styles.contactButton}>Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default InformationSection;
