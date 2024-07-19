import React from 'react';
import Layout from '../layout';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LocationList from '../../components/LocationList';
import LocationData from '../../components/jsons/locations.json';
import styles from './page.module.css';

export default function Product() {
  return (
    <Layout>
      <Navbar />
      <div className={styles.page}>
        <LocationList locationData={LocationData} />
      </div>
      <Footer />
    </Layout>
  );
}
