'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${product.id}`);
  };

  return (
    <div className={styles['product-card']} onClick={handleClick}>
      <div className={styles['product-image-container']}>
        <img 
          src={product.productImage} 
          alt={product.name} 
          className={styles['product-image']} 
        />
      </div>
      <div className={styles['product-details']}>
        <h3 className={styles['product-name']}>{product.name}</h3>
      {/*<p className={styles['product-name']}>{product.sizes.length} SIZES</p>*/}
      </div>
    </div>
  );
};

export default ProductCard;