import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import styles from './ProductDetail.module.css';

const ProductDetail = ({ product, allProducts }) => {
  const router = useRouter(); // Initialize the router
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [mainImage, setMainImage] = useState(product.productImage);
  const [secondaryImage, setSecondaryImage] = useState(product.secondaryImage);


  useEffect(() => {
    setMainImage(product.productImage);
    setSecondaryImage(product.secondaryImage);  
    setSelectedColor(product.colors[0]);
    setSelectedSize(product.sizes[0]);
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, [product]);

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };
  
  const swapImages = () => {
    setMainImage((prevMain) => {
      setSecondaryImage(prevMain);
      return secondaryImage;
    });
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

  // Get related products based on the current product's related IDs
  const relatedProducts = product.related.map((relatedId) =>
    allProducts.find((p) => p.id === relatedId)
  );

  // Handle navigation to a related product's page
  const handleRelatedProductClick = (productId) => {
    router.push(`/product/${productId}`); // Use router.push for navigation
  };

  return (
    <div className={styles['product-detail']}>
      {/* Details Section */}
      <div className={styles['details-section']}>
      <div className={styles['image-section']}>
        <div className={styles['main-image-container']}>
          <img
            src={mainImage}
            alt={product.name}
            className={styles['main-image']}
          />
        </div>
        <div className={styles['secondary-image-container']}>
          <img
            src={secondaryImage}
            alt="Secondary View"
            className={styles['secondary-image']}
            onClick={swapImages} // Click to swap images
            style={{ cursor: 'pointer' }} // Indicates it's clickable
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

      {/* Related Products Section */}
      <div className={styles['related-products-section']}>
        <h3>Related Products</h3>
        <div className={styles['related-products-container']}>
          {relatedProducts.map((relatedProduct) => (
            <div
              key={relatedProduct.id}
              className={styles['related-product-tile']}
              onClick={() => handleRelatedProductClick(relatedProduct.id)} // Use onClick with router.push
            >
              <img
                src={relatedProduct.productImage}
                alt={relatedProduct.name}
                className={styles['related-product-image']}
              />
              <p className={styles['related-product-name']}>{relatedProduct.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;