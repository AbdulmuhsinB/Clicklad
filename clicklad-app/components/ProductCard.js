import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({ product, onClick }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${product.productImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  };

  const handleClick = () => {
    onClick(product.id);
  };

  return (
    <div className={styles['product-card']} onClick={handleClick}>
      <div className={styles['product-image']} style={backgroundImageStyle}></div>
      <div className={styles['product-content']}>
        <div className={styles['product-name']}>{product.name}</div>
        <button className={styles['view-button']}>
          View Product
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
