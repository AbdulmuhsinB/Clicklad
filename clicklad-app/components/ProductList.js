'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import ProductCard from './ProductCard';
import styles from './ProductList.module.css';

const ProductList = ({ products }) => {
  const router = useRouter();

  const handleProductClick = (productId) => {
    router.push(`/product/${productId}`); // Navigate to product details page
  };

  const categories = [...new Set(products.map(product => product.category))];
  const categorizedProducts = categories.map(category => ({
    category,
    products: products.filter(product => product.category === category),
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
                <ProductCard key={product.id} product={product} onClick={() => handleProductClick(product.id)} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
