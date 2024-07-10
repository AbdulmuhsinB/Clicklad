import React from 'react';
import styles from './ProductDetail.module.css'; // Import your CSS module

const ProductDetail = ({ product, onBack }) => {
  return (
    <div className={styles['product-detail']}>
      <div className={styles['detail-header']}>
        <button className={styles['back-button']} onClick={onBack}>
          Back
        </button>
      </div>
      <div className={styles['detail-content']}>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        {product.discount > 0 && <p>Discount: {product.discount}% Off</p>}
        <img src={product.image} alt={product.name} className={styles['product-image']} />
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default ProductDetail;
