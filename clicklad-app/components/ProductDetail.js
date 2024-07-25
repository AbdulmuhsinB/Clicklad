import React, { useState, useEffect } from 'react';
import styles from './ProductDetail.module.css';

const ProductDetail = ({ product }) => {
  const [mainImage, setMainImage] = useState(product.colors[0].mainImage);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  useEffect(() => {
    setMainImage(product.colors[0].mainImage);
  }, [product]);

  const handleColorClick = (index) => {
    setSelectedColorIndex(index);
    setMainImage(product.colors[index].mainImage);
  };

  const addToCart = () => {
    const selectedColor = product.colors[selectedColorIndex];
    const selectedItem = {
      id: product.id,
      color: selectedColor.title, // Store only id and color.title
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItemIndex = cart.findIndex(
      (item) =>
        item.id === selectedItem.id &&
        item.color === selectedItem.color
    );

    if (existingItemIndex === -1) {
      cart.push(selectedItem);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert('Product added to cart!');
    } else {
      alert('Product already in cart!');
    }
  };

  return (
    <div className={styles['product-detail']}>
      <a href="/product" className={styles['back-button']}>
        <img src="/icons/back-icon.png" alt="Continue shopping" />
      </a>
      <div className={styles['image-section']}>
        <div className={styles['main-image-container']}>
          <img
            src={mainImage}
            alt={product.name}
            className={styles['main-image']}
          />
        </div>
      </div>
      <div className={styles['details-section']}>
        <h2 className={styles['product-name']}>{product.name}</h2>
        <p className={styles['product-description']}>{product.description}</p>
        <hr className={styles['separator']} />

        <div className={styles['color-section']}>
          <p className={styles['product-description']}>
            Colors: {product.colors[selectedColorIndex].title}
          </p>
          <div className={styles['color-options']}>
            {product.colors.map((color, index) => (
              <img
                key={index}
                src={color.thumbnail}
                alt={color.title}
                className={`${styles['color-circle']} ${selectedColorIndex === index ? styles['selected'] : ''}`}
                onClick={() => handleColorClick(index)}
              />
            ))}
          </div>
        </div>
        <button className={styles['add-to-cart-button']} onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
