import React, { useState, useEffect } from 'react';
import styles from './ProductDetail.module.css';

const ProductDetail = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  useEffect(() => {
    setSelectedColor(product.colors[0]);
    setSelectedSize(product.sizes[0]);
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, [product]);

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const addToCart = () => {
    const selectedItem = {
      id: product.id,
      color: selectedColor,
      size: selectedSize,
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItemIndex = cart.findIndex(
      (item) =>
        item.id === selectedItem.id &&
        item.color === selectedItem.color &&
        item.size === selectedItem.size
    );

    if (existingItemIndex === -1) {
      cart.push(selectedItem);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert('Product added to cart!');

      // Dispatch a custom event to update the cart count
      window.dispatchEvent(new Event('storage'));
    } else {
      alert('Product already in cart!');
    }
  };

  return (
    <div className={styles['product-detail']}>
      <a href="/product" className={styles['back-button']}>
        <img src="/icons/back-icon.png" alt="Continue shopping" />
      </a>

      {/* Details Section */}
      <div className={styles['details-section']}>
        <div className={styles['image-section']}>
          <div className={styles['main-image-container']}>
            <img
              src={product.productImage}
              alt={product.name}
              className={styles['main-image']}
            />
          </div>
        </div>

        <div className={styles['product-info']}>
          <div className={styles['product-header']}>
            <h2 className={styles['product-name']}>{product.name}</h2>
          </div>
          <p className={styles['product-description']}>{product.description}</p>

          <div className={styles['selection-section']}>
            <div className={styles['dropdown-section']}>
              <label htmlFor="size" className={styles['dropdown-label']}>Size:</label>
              <select
                id="size"
                className={styles['dropdown']}
                value={selectedSize}
                onChange={handleSizeChange}
              >
                {product.sizes.map((size, index) => (
                  <option key={index} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles['dropdown-section']}>
              <label htmlFor="color" className={styles['dropdown-label']}>Color:</label>
              <select
                id="color"
                className={styles['dropdown']}
                value={selectedColor}
                onChange={handleColorChange}
              >
                {product.colors.map((color, index) => (
                  <option key={index} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button className={styles['add-to-cart-button']} onClick={addToCart}>
            Add to Cart
          </button>

          <div className={styles['product-info-box']}>
            <div className={styles['info-item']} style={{ paddingTop: "8px" }}>
              <span className={styles['info-title']}>Details </span>
            </div>
            <div className={styles['info-item']}>
              <span className={styles['info-title']}>SKU: </span>
              <span className={styles['info-value']}>{product.id}</span>
            </div>
            <div className={styles['info-item']}>
              <span className={styles['info-title']}>Description: </span>
              <span className={styles['info-value']}>{product.description}</span>
            </div>
            <div className={styles['info-item']}>
              <span className={styles['info-title']}>Standard Size: </span>
              <span className={styles['info-value']}>{product['standard-size']}</span>
            </div>
            <div className={styles['info-item']}>
              <span className={styles['info-title']}>Unit Weight: </span>
              <span className={styles['info-value']}>{product['weight-per-unit']}</span>
            </div>
            <div className={styles['info-item']}>
              <span className={styles['info-title']}>Finish: </span>
              <span className={styles['info-value']}>{product['finish']}</span>
            </div>
            <div className={styles['info-item']}>
              <span className={styles['info-title']}>Profile Size: </span>
            </div>
            <div className={styles['info-item']} style={{ paddingBottom: "8px" }}>
              <div className={styles['profile-size']}>
                <span>
                  <span className={styles['info-value']}>Inches: {product['Profile Size'][0].inch}</span>
                </span>
                <span>
                  <span className={styles['info-value']}>mm: {product['Profile Size'][0].mm}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className={styles['features-section']}>
      <h3>Features</h3>

        <div className={styles['features-container']}>
          {product.features.map((feature, index) => (
            <div key={index} className={styles['feature-box']}>
              <img src={feature.icon} alt={feature.name} className={styles['feature-icon']} />
              <h3 className={styles['feature-name']}>{feature.name}</h3>
              <p className={styles['feature-description']}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;