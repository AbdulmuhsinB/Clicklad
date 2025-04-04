'use client';

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styles from './Contact.module.css';

const Contact = () => {
    const [isInfoVisible, setInfoVisible] = useState(false);
    const [isFormVisible, setFormVisible] = useState(false);
    const infoRef = useRef(null);
    const formRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (entry.target === infoRef.current) {
                            setInfoVisible(true);
                        } else if (entry.target === formRef.current) {
                            setFormVisible(true);
                        }
                    }
                });
            },
            {
                threshold: 0.1 // Trigger when 10% of the element is visible
            }
        );

        if (infoRef.current) {
            observer.observe(infoRef.current);
        }
        if (formRef.current) {
            observer.observe(formRef.current);
        }

        return () => {
            if (infoRef.current) {
                observer.unobserve(infoRef.current);
            }
            if (formRef.current) {
                observer.unobserve(formRef.current);
            }
        };
    }, []);

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
            <div
                className={`${styles.contactInfo} ${isInfoVisible ? styles.visible : ''}`}
                ref={infoRef}
            >
                <div className={styles.contactText}>
                    <h2 className={styles.heading}>Contact Us</h2>
                    <p className={styles.description}>
                    Phone: 416-885-7330
                    </p>
                </div>
            </div>
            <div
                className={`${styles.contactForm} ${isFormVisible ? styles.visible : ''}`}
                ref={formRef}
            >
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
