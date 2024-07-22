import React from 'react';
import Layout from '../layout';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FAQS from '../../components/FAQ';
import styles from './page.module.css';

export default function FAQ() {
  return (
    <Layout>
      <Navbar />
      <div className={styles.page}>
        <FAQS/>
      </div>
      <Footer />
    </Layout>
  );
}
