'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import ProductDetail from '@/components/ProductDetail';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import productsData from '@/components/jsons/product.json';
import styles from '../page.module.css';

const ProductDetailPage = () => {
  const { id } = useParams();
  if (!id) return <p>Loading...</p>;

  const product = productsData.find((p) => p.id.toString() === id);
  if (!product) return <p>Product not found!</p>;

  return (
    <>
      <Navbar />  {/* Ensure Navbar is here */}
      <div className={styles.page}>
          <ProductDetail product={product} />
          </div>

      <Footer />  {/* Ensure Footer is here */}
    </>
  );
};

export default ProductDetailPage;
