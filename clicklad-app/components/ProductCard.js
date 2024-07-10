// components/ProductCard.js

import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({ product, onClick }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${product.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative', // Ensure relative positioning for absolute children
  };

  const handleClick = () => {
    onClick(product.id); // Pass the product ID to the parent component
  };

  return (
    <div className={styles['product-card']} onClick={handleClick}>
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
