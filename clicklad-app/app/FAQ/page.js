import React from 'react';
import Layout from '../layout';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FAQ from '../../components/FAQ';
import styles from './page.module.css';

export default function Product() {
  return (
    <Layout>
      <Navbar />
      <div className={styles.page}>
        <FAQ/>
      </div>
      <Footer />
    </Layout>
  );
}
