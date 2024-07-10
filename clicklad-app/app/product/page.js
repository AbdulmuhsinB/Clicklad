// pages/Product.js

import React from 'react';
import Layout from '../layout';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProductList from '../../components/ProductList';
import productsData from '../../components/jsons/product.json'; // Assuming your JSON file is in the same directory
import styles from './page.module.css'; // Import your CSS module

export default function Product() {
  return (
    <Layout>
      <Navbar />
      <div className={styles.page}>
        <ProductList products={productsData} />
      </div>
      <Footer />
    </Layout>
  );
}
