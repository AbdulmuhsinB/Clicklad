'use client';
import React from 'react';
import { useRouter } from 'next/navigation'; // Correct for App Router
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const router = useRouter();

  const backgroundImageStyle = {
    backgroundImage: `url(${product.productImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  };

  const handleClick = () => {
    router.push(`/product/${product.id}`); // Correct App Router navigation
  };

  return (
    <div className={styles['product-card']} onClick={handleClick}>
      <div className={styles['product-image']} style={backgroundImageStyle}></div>
      <div className={styles['product-content']}>
        <div className={styles['product-name']}>{product.name}</div>
        <button className={styles['view-button']} onClick={handleClick}>
          View Product
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
