import React from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSection}>
        <a href="/" className={styles.logoLink}>
          <img src="/logo.png" alt="Logo" className={styles.navbarLogo} />
        </a>
        <div className={styles.navbarLinks}>
          <a href="#about-us">About Us</a>
          <a href="#products">Products</a>
          <a href="#locations">Locations</a>
          <a href="#faqs">FAQs</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <a href="#cart" className={styles.cartLink}>
        Cart
        <img src="/cart-icon.png" alt="Cart" className={styles.cartIcon} />
      </a>
    </nav>
  );
}
