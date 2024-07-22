"use client";
import React, { useState } from 'react';
import styles from './FAQ.module.css';
import faqData from './jsons/FAQ'; // Adjust the path if necessary

export default function FAQ() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleAnswer = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Frequently Asked Questions</h1>
      <div className={styles.faqList}>
        {faqData.map(({ id, question, answer }) => (
          <div
            key={id}
            className={`${styles.faqItem} ${expandedId === id ? styles.expanded : ''}`}
            onClick={() => toggleAnswer(id)}
          >
            <div className={styles.questionContainer}>
              <span className={styles.question}>{question}</span>
              <div className={`${styles.icon} ${expandedId === id ? styles.expanded : ''}`}>
                <div className={styles.stick1}></div>
                <div className={styles.stick2}></div>
              </div>
            </div>
            {expandedId === id && <div className={styles.answer}>{answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
