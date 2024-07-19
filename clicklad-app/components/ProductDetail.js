import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import styles from './ProductDetail.module.css';

const ProductDetail = ({ product }) => {
  const [mainImage, setMainImage] = useState(product.image);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleColorClick = (index) => {
    setSelectedColorIndex(index);
  };

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  const nextSlide = () => {
    const images = [product.image, ...product.alternateImages];
    setCurrentSlide((prev) => (prev + 1) % images.length);
    setMainImage(images[(currentSlide + 1) % images.length]);
  };

  const prevSlide = () => {
    const images = [product.image, ...product.alternateImages];
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    setMainImage(images[(currentSlide - 1 + images.length) % images.length]);
  };

  const addToCart = () => {
    if (selectedColorIndex !== null) {
      const selectedColor = product.colors[selectedColorIndex];
      const selectedItem = {
        id: product.id,
        name: product.name,
        color: selectedColor.title,
        image: mainImage,
        price: product.price,
      };

      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push(selectedItem);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert('Product added to cart!');
    } else {
      alert('Please select a color before adding to cart.');
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
  });

  return (
    <div className={styles['product-detail']}>
      <div className={styles['image-section']}>
        <div className={styles['thumbnail-images']}>
          {product.alternateImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${product.name} alt ${index}`}
              className={styles['thumbnail-image']}
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
        <div {...swipeHandlers} className={styles['main-image-container']}>
          <img
            src={mainImage}
            alt={product.name}
            className={styles['main-image']}
          />
          <div className={styles['slideshow-controls']}>
            <button onClick={prevSlide} className={styles['prev-button']}>
              <img src="/icons/back-icon.png" alt="Previous" className={styles['icon']} />
            </button>
            <button onClick={nextSlide} className={styles['next-button']}>
              <img src="/icons/back-icon.png" alt="Next" className={`${styles['icon']} ${styles['rotate']}`} />
            </button>
          </div>
          <div className={styles['pagination']}>
            {Array(product.alternateImages.length + 1).fill().map((_, index) => (
              <span
                key={index}
                className={`${styles['dot']} ${index === currentSlide ? styles['active'] : ''}`}
                onClick={() => {
                  setCurrentSlide(index);
                  setMainImage([product.image, ...product.alternateImages][index]);
                }}
              ></span>
            ))}
          </div>
        </div>
      </div>
      <div className={styles['details-section']}>
        <h2 className={styles['product-name']}>{product.name}</h2>
        <p className={styles['product-description']}>{product.description}</p>
        <hr className={styles['separator']} />

        <div className={styles['color-section']}>
          <p className={styles['product-description']}>Colors:</p>
          <div className={styles['color-options']}>
            {product.colors.map((color, index) => (
              <img
                key={index}
                src={color.image}
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
