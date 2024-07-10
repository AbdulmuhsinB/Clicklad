//PRUDCTLIST.JS
import React from 'react';
import ProductCard from './ProductCard';
import styles from './ProductList.module.css'; // Import your CSS module

const ProductList = ({ products }) => {
  return (
    <div className={styles['product-list-wrapper']}>
      <div className={styles['product-list']}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
