// components/ProductList.js
'use client';
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductDetail from './ProductDetail';
import styles from './ProductList.module.css'; // Import your CSS module

const ProductList = ({ products }) => {
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleProductClick = (productId) => {
    setSelectedProductId(productId); // Set the selected product ID
  };

  const handleBackClick = () => {
    setSelectedProductId(null); // Reset selected product ID to null
  };

  if (selectedProductId) {
    const selectedProduct = products.find(product => product.id === selectedProductId);
    return <ProductDetail product={selectedProduct} onBack={handleBackClick} />;
  }

  return (
    <div className={styles.page}>
      <h1 className={styles['our-products']}>Our Products</h1>
      <div className={styles['product-list-wrapper']}>
        <div className={styles['product-list']}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} onClick={handleProductClick} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
