'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import ProductDetail from '@/components/ProductDetail';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import productsData from '@/components/jsons/product.json';
import styles from '../page.module.css';

const ProductDetailPage = () => {
  const { id } = useParams(); // Extract the `id` parameter from the URL

  // Show a loading state if the `id` is not yet available
  if (!id) return <p>Loading...</p>;

  // Find the product with the matching ID
  const product = productsData.find((p) => p.id.toString() === id);

  // Handle the case where the product is not found
  if (!product) return <p>Product not found!</p>;

  return (
    <>
      <Navbar /> {/* Ensure Navbar is here */}
      <div className={styles.page}>
        {/* Pass both `product` and `allProducts` to ProductDetail */}
        <ProductDetail product={product} allProducts={productsData} />
      </div>
      <Footer /> {/* Ensure Footer is here */}
    </>
  );
};

export default ProductDetailPage;