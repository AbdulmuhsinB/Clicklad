import React from 'react';
import styles from './InformationSection.module.css';

const InformationSection = () => {
  return (
    <section className={styles.informationSection}>
      <div className={styles.content}>
        <div className={styles.leftContent}>
          <img
            src="/House.jpg" // Replace with your image URL
            alt="Innovative Aluminum Solutions"
            className={`${styles.image} ${styles.floatIn}`}
          />
        </div>
        <div className={styles.rightContent}>
          <h2 className={styles.title}>INNOVATIVE ALUMINUM SOLUTIONS</h2>
          <p className={styles.description}>
            <span className={styles.highlight}>Clicklad™</span> is a cladding material based on recycled aluminum that comes in a variety of sizes and cladding options. In the stages of thinking about the product, we were faced with several goals such as: installation time, product efficiency for weather conditions, system weight, and more. We are confident that we have managed to meet the requirements and challenges at the highest level.
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.number}>10+</div>
              <div className={styles.statTitle}>YEARS EXPERIENCE</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.number}>3500+</div>
              <div className={styles.statTitle}>SATISFIED CUSTOMERS</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.number}>20</div>
              <div className={styles.statTitle}>PRODUCTS & FINISHES</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.number}>36</div>
              <div className={styles.statTitle}>AWARDS WON</div>
            </div>
          </div>
          <button className={styles.contactButton}>Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default InformationSection;
