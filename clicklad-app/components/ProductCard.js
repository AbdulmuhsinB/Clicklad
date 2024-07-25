import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({ product, onClick }) => {
  // Get the main image of the first color
  const firstColorImage = product.colors[0]?.mainImage;

  const backgroundImageStyle = {
    backgroundImage: `url(${firstColorImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative', 
  };

  const handleClick = () => {
    onClick(product.id);
  };

  return (
    <div className={styles['product-card']} onClick={handleClick}>
      <div className={styles['product-image']} style={backgroundImageStyle}>
      </div>
      <div className={styles['product-content']}>
        <div className={styles['product-name']}>{product.name}</div>
      </div>
    </div>
  );
};

export default ProductCard;
