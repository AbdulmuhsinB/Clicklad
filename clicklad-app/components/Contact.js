'use client';
// Contact.js

import React from 'react';
import axios from 'axios';
import styles from './Contact.module.css';

const Contact = () => {
    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await axios.post("https://api.web3forms.com/submit", {
                access_key: "3bd89381-1de5-4cb8-b1a0-efc2cfc1484e",
                name: e.target.name.value,
                email: e.target.email.value,
                message: e.target.message.value,
            });

            if (response.data.success) {
                console.log(response.data);
                alert("Form submitted successfully!");
                e.target.reset();
            } else {
                alert("Failed to submit form. Please try again later.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Error submitting form. Please try again later.");
        }
    }

    return (
        <div className={styles.contactContainer}>
            <div className={styles.contactInfo}>
                <div className={styles.contactText}>
                    <h2 className={styles.heading}>Contact Us</h2>
                    <p className={styles.description}>
                        123 Main Street, Toronto, ON, M3L 2J2<br />
                        647-842-4782<br />
                        info@clicklad.ca
                    </p>
                </div>
            </div>
            <div className={styles.contactForm}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <input type="text" id="name" name="name" placeholder="Enter Your Name" className={styles.inputField} required />
                        <input type="email" id="email" name="email" placeholder="Enter Your Email" className={styles.inputField} required />
                    </div>
                    <div className={styles.formGroup}>
                        <textarea id="message" name="message" placeholder="Enter Your Message" rows="6" className={styles.textAreaField} required></textarea>
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
