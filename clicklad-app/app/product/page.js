// pages/Product.js
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProductList from '../../components/ProductList';
import productsData from '../../components/jsons/product.json';
import styles from './page.module.css';

export default function Product() {
  return (
    <>
      <Navbar />
      <div className={styles.page}>
        <ProductList products={productsData} />
      </div>
      <Footer />
    </>
  );
}

