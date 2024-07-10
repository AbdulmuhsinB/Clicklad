import React, { Component } from 'react';
import styles from './ProductDetail.module.css'; // Import your CSS module

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImage: props.product.image,
      selectedColor: null,
    };
    this.mainImageRef = React.createRef();
    this.thumbnailRefs = [];
  }

  handleColorClick(color, index) {
    this.setState({ selectedColor: color });

    // Remove selected class from all circles
    document.querySelectorAll(`.${styles['color-circle']}`).forEach(circle => {
      circle.classList.remove(styles['selected-color']);
    });

    // Add selected class to clicked circle
    this.thumbnailRefs[index].classList.add(styles['selected-color']);
  }

  handleImageClick(image, index) {
    // Swap main image with clicked thumbnail
    const currentMainImage = this.state.mainImage;
    this.setState({ mainImage: image });

    // Update the alternate images array
    const updatedAlternateImages = [...this.props.product.alternateImages];
    updatedAlternateImages[index] = currentMainImage;

    this.props.product.alternateImages = updatedAlternateImages;
  }

  render() {
    const { product, onBack } = this.props;
    const { mainImage, selectedColor } = this.state;

    return (
      <div className={styles['product-detail']}>
        <div className={styles['detail-header']}>
          <img className={styles['back-button']} onClick={onBack} src='/back-icon.png'>
          </img>
        </div>
        <div className={styles['detail-content']}>
          <div className={styles['image-section']}>
            <div className={styles['thumbnail-images']}>
              {product.alternateImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.name} alt ${index}`}
                  className={styles['thumbnail-image']}
                  ref={(el) => this.thumbnailRefs[index] = el}
                  onClick={() => this.handleImageClick(image, index)}
                />
              ))}
            </div>
            <img ref={this.mainImageRef} src={mainImage} alt={product.name} className={styles['main-image']} />
          </div>
          <div className={styles['details-section']}>
            <h2 className={styles['product-name']}>{product.name}</h2>
            <p className={styles['product-description']}>{product.description}</p>
            <p className={styles['product-price']}>Price: ${product.price}</p>
            {product.discount > 0 && <p className={styles['product-discount']}>Discount: {product.discount}% Off</p>}
            {product.colors.length > 0 && (
              <div className={styles['color-section']}>
                <p>Colors:</p>
                <div className={styles['color-options']}>
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className={`${styles['color-circle']} ${selectedColor === color ? styles['selected-color'] : ''}`}
                      style={{ backgroundColor: color }}
                      onClick={() => this.handleColorClick(color, index)}
                    ></div>
                  ))}
                </div>
              </div>
            )}
            <button className={styles['add-to-cart-button']}>Add to Cart</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
