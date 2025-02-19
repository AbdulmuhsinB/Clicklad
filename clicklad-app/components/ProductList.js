'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import ProductCard from './ProductCard';
import styles from './ProductList.module.css';

const ProductList = ({ products }) => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('All'); // Default to 'All'

  const handleProductClick = (productId) => {
    router.push(`/product/${productId}`); // Navigate to product details page
  };

  // Get unique categories
  const categories = ['All', ...new Set(products.map(product => product.category))];

  // Group products by category (for the default sorted view)
  const categorizedProducts = categories
    .filter(category => category !== 'All') // Exclude 'All' from the grouped view
    .map(category => ({
      category,
      products: products.filter(product => product.category === category),
    }));

  // Filter products based on the selected category
  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className={styles.page}>
      <h1 className={styles['our-products']}>Our Products</h1>

      {/* Product List */}
      <div className={styles['product-list-wrapper']}>

        {/* Category Tags */}
        <div className={styles['category-tags']}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles['category-tag']} ${selectedCategory === category ? styles['active'] : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {selectedCategory === 'All' ? (
          // Default grouped view (sorted by category)
          categorizedProducts.map(({ category, products }) => (
            <div key={category}>
              <h2 className={styles['category-title']}>{category}</h2>
              <div className={styles['product-list']}>
                {products.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onClick={() => handleProductClick(product.id)}
                  />
                ))}
              </div>
            </div>
          ))
        ) : (
          // Filtered view (only products from the selected category)
          <div>
            <h2 className={styles['category-title']}>{selectedCategory}</h2>
            <div className={styles['product-list']}>
              {filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => handleProductClick(product.id)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;