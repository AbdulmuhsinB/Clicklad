// components/Hero.js
import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Redefining Aluminum Excellence</h1>
        <p className={styles.heroSubtitle}>Canada's Building Distributor for Clicklad Aluminum</p>
        <div className={styles.heroButtons}>
          <a href="#explore" className={styles.heroButton}>Explore our Products</a>
          <a href="#learn-more" className={`${styles.heroButton} ${styles.learnMoreButton}`}>Learn More</a>
        </div>
      </div>
    </div>
  );
}
