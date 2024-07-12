'use client';

import React, { Component } from 'react';
import styles from './page.module.css';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: JSON.parse(localStorage.getItem('cart')) || [],
    };
  }

  render() {
    const { cart } = this.state;

    return (
      <div className={styles['cart-page']}>
        <h1>Shopping Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className={styles['cart-items']}>
            {cart.map((item, index) => (
              <div key={index} className={styles['cart-item']}>
                <img src={item.image} alt={item.name} className={styles['cart-item-image']} />
                <div className={styles['cart-item-details']}>
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                  <p>Price: ${item.price}</p>
                  {item.discount > 0 && <p>Discount: {item.discount}% Off</p>}
                  {item.selectedColor && <p>Color: {item.selectedColor}</p>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Cart;
