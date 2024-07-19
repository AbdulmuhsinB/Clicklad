'use client'; // This directive indicates that this module should be executed in client-side only

import React, { Component } from 'react';
import styles from './page.module.css';
import Layout from '../layout';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        country: '',
        streetAddress: '',
        city: '',
        province: '',
      },
    };
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
      const uniqueCart = this.getUniqueCart(storedCart);
      this.setState({ cart: uniqueCart });
    }
  }

  getUniqueCart(cart) {
    const uniqueItems = [];
    const itemSet = new Set();

    cart.forEach((item) => {
      const identifier = `${item.color}-${item.id}`;
      if (!itemSet.has(identifier)) {
        itemSet.add(identifier);
        uniqueItems.push(item);
      }
    });

    return uniqueItems;
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

  handleClearCart = () => {
    localStorage.removeItem('cart');
    this.setState({ cart: [] });
  };

  handleRemoveItem = (index) => {
    const updatedCart = [...this.state.cart];
    updatedCart.splice(index, 1);
    this.setState({ cart: updatedCart });
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  formatCartItems = (cart) => {
    return cart.map(item => `Name: ${item.name}, Color: ${item.color}, ID: ${item.id}`).join('\n');
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { formData, cart } = this.state;

    // Prepare the data to be sent to Web3Forms
    const data = {
      access_key: '3bd89381-1de5-4cb8-b1a0-efc2cfc1484e',
      ...formData,
      cart: this.formatCartItems(cart)
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        alert('Order submitted successfully!');
        // Clear the cart and form data on successful submission
        this.handleClearCart();
        this.setState({
          formData: {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            country: '',
            streetAddress: '',
            city: '',
            province: '',
          }
        });
      } else {
        alert('Failed to submit the order');
      }
    } catch (error) {
      alert('Error submitting the order');
    }
  };

  render() {
    const { cart, formData } = this.state;

    return (
      <Layout>
        <Navbar />
        <div className={styles['Checkout-nav']}>
          <div className={styles['checkout-banner']}>
            <div className={styles['checkout-banner-content']}>
              <h1>Checkout</h1>
              <p>One sample per product.</p>
            </div>
          </div>
          <div className={styles['cart-page']}>
            <div className={styles['cart-section']}>
              <h2>Cart</h2>
              {cart.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                <div className={styles['cart-items']}>
                  <div className={styles['cart-header']}>
                    <span>Product</span>
                    <button className={styles['clear-cart']} onClick={this.handleClearCart}>
                      Clear cart
                    </button>
                  </div>
                  <hr className={styles['cart-item-divider']} />
                  {cart.map((item, index) => (
                    <React.Fragment key={index}>
                      <div className={styles['cart-item']}>
                        <img src={item.image} alt={item.name} className={styles['cart-item-image']} />
                        <div className={styles['cart-item-details']}>
                          <h3>{item.name}</h3>
                          <p>Color: <span className={styles['highlighted']}>{item.color}</span></p>
                          <p>SKU: <span className={styles['highlighted']}>{item.id}</span></p>
                        </div>
                        <button className={styles['remove-item']} onClick={() => this.handleRemoveItem(index)}>
                          <img src="/icons/x-icon.png" alt="Remove" />
                        </button>
                      </div>
                      <hr className={styles['cart-item-divider']} />
                    </React.Fragment>
                  ))}
                </div>
              )}
              <a href="/product" className={styles['cart-footer']}>
                <button className={styles['continue-shopping']}>
                  <img src="/icons/back-icon.png" alt="Continue shopping" />
                  Continue shopping
                </button>
              </a>
            </div>
            <div className={styles['form-section']}>
              <form className={styles['checkout-form']} onSubmit={this.handleSubmit}>
                <h2>Contact Information</h2>
                <label>
                  First Name
                  <input type="text" name="firstName" value={formData.firstName} onChange={this.handleInputChange} required />
                </label>
                <label>
                  Last Name
                  <input type="text" name="lastName" value={formData.lastName} onChange={this.handleInputChange} required />
                </label>
                <label>
                  Email
                  <input type="email" name="email" value={formData.email} onChange={this.handleInputChange} required />
                </label>
                <label>
                  Phone Number
                  <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={this.handleInputChange} required />
                </label>
                <div className={styles['gap']}></div>
                <h2>Shipping Address</h2>
                <label>
                  Country
                  <input type="text" name="country" value={formData.country} onChange={this.handleInputChange} required />
                </label>
                <label>
                  Street Address
                  <input type="text" name="streetAddress" value={formData.streetAddress} onChange={this.handleInputChange} required />
                </label>
                <label>
                  City
                  <input type="text" name="city" value={formData.city} onChange={this.handleInputChange} required />
                </label>
                <label>
                  Province
                  <input type="text" name="province" value={formData.province} onChange={this.handleInputChange} required />
                </label>
                <div className={styles['gap']}></div>
                <button type="submit" className={styles['submit-button']}>Submit Order</button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </Layout>
    );
  }
}

export default Cart;
