'use client';
import React, { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSection}>
        <a href="/" className={styles.logoLink}>
          <img src="/logo.png" alt="Logo" className={styles.navbarLogo} />
        </a>
        <div className={`${styles.navbarLinks} ${isOpen ? styles.active : ''}`}>
          <a href="/about-us">About Us</a>
          <a href="/product">Products</a>
          <a href="/location">Locations</a>
          <a href="/FAQ">FAQs</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
      <a href="/cart" className={styles.cartLink}>
        Cart
        <img src="/icons/cart-icon.png" alt="Cart" className={styles.cartIcon} />
      </a>
      <img 
        src="/icons/hamburger-icon.png" 
        alt="Hamburger" 
        className={styles.hamburgerIcon} 
        onClick={toggleMenu} 
      />
      {isOpen && (
        <div className={styles.overlay} onClick={toggleMenu}>
          <div className={styles.popup}>
            <a href="/about-us">About Us</a>
            <a href="/product">Products</a>
            <a href="/location">Locations</a>
            <a href="/FAQ">FAQs</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
