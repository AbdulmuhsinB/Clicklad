'use client';
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductDetail from './ProductDetail';
import styles from './ProductList.module.css';

const ProductList = ({ products }) => {
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleProductClick = (productId) => {
    setSelectedProductId(productId);
  };

  const handleBackClick = () => {
    setSelectedProductId(null);
  };

  if (selectedProductId) {
    const selectedProduct = products.find(product => product.id === selectedProductId);
    return <ProductDetail product={selectedProduct} onBack={handleBackClick} />;
  }

  const categories = [...new Set(products.map(product => product.category))];
  const categorizedProducts = categories.map(category => ({
    category,
    products: products.filter(product => product.category === category)
  }));

  return (
    <div className={styles.page}>
      <h1 className={styles['our-products']}>Our Products</h1>
      <div className={styles['product-list-wrapper']}>
        {categorizedProducts.map(({ category, products }) => (
          <div key={category}>
            <h2 className={styles['category-title']}>Available {category} Options</h2>
            <div className={styles['product-list']}>
              {products.map(product => (
                <ProductCard key={product.id} product={product} onClick={handleProductClick} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
