// Contact.js
'use client';

import React from 'react';
import styles from './Contact.module.css'; // Import the CSS module

const Contact = () => {
    return (
        <div className={styles.contactContainer}>
            <div className={styles.contactInfo}>
                <div className={styles.contactText}>
                    <h2>Contact Us</h2>
                    <p>123 Main Street, Toronto, ON, M3L 2J2<br />
                    647-842-4782<br />
                    info@clicklad.ca</p>
                </div>
            </div>
            <div className={styles.contactForm}>
                <form>
                    <div className={styles.formGroup}>
                        <input type="text" id="name" name="name" placeholder="Your Name" className={styles.inputField} required />
                    </div>
                    <div className={styles.formGroup}>
                        <input type="email" id="email" name="email" placeholder="Your Email" className={styles.inputField} required />
                    </div>
                    <div className={styles.formGroup}>
                        <textarea id="message" name="message" placeholder="Your Message" rows="6" className={styles.textAreaField} required></textarea>
                    </div>
                    <div className={styles.formGroup}>
                        <button type="submit" className={styles.button}>Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
