import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column1}>
          <h2>CLICKLAD</h2>
          <p>Canada's building distributor for Clicklad Aluminum</p>
        </div>
        <div className={styles.column}>
          <h2>CONTACT</h2>
          <p><a href="#"><img className={styles.images} src="/icons/map-marker-icon.png" alt="Map Marker Icon" /> 123 Main Street, Toronto, ON, M3L 2J2</a></p>
          <p><a href="#"><img className={styles.images} src="/icons/phone-icon.png" alt="Phone Icon" /> 222-555-555</a></p>
          <p><a href="#"><img className={styles.images} src="/icons/email-icon.png" alt="Mail Icon" /> info@clickladcanada.ca</a></p>
        </div>
        <div className={styles.column3}>
          <h2>FOLLOW US</h2>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img className={styles.followIcon} src="/icons/instagram-icon.png" alt="Instagram Icon" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img className={styles.followIcon} src="/icons/facebook-icon.png" alt="Facebook Icon" />
          </a>
        </div>
      </div>
      <div className={styles.copyright}>
        © 2024 Clicklad App. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
