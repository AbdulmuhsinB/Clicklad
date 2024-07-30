import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ContactPage from '../../components/ContactPage';
import styles from './page.module.css';

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className={styles.page}>
        <ContactPage/>
      </div>
      <Footer />
    </>
  );
}
