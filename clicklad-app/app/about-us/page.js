import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AboutUs from '../../components/AboutUs';
import styles from './page.module.css';

export default function About() {
  return (
    <>
      <Navbar />
      <div className={styles.page}>
        <AboutUs/>
      </div>
      <Footer />
    </>
  );
}
