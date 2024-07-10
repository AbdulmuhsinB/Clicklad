// components/ProductCard.js

import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${product.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative', // Ensure relative positioning for absolute children
  };

  return (
    <div className={styles['product-card']}>
      <div className={styles['product-image']} style={backgroundImageStyle}>
        {product.discount > 0 && (
          <div className={styles['discount-bubble']}>
            <div className={styles['discount-text']}>
              {product.discount}% Off
            </div>
          </div>
        )}
      </div>
      <div className={styles['product-content']}>
        <div className={styles['product-name']}>{product.name}</div>
      </div>
    </div>
  );
};

export default ProductCard;
