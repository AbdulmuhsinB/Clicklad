import React from 'react';
import styles from './AboutUs.module.css';

export default function AboutUs() {
  return (
    <div className={styles.page}>
      {/* Vision Section */}
      <div className={styles.container}>
        <div className={styles.column1}>
          <h1 className={styles.title}>Our vision for progress and empowerment.</h1>
          <p className={styles.description}>
            With over 25 years of experience in the field of aluminum, we have realized that today the modern world is showing a growing demand for quality aluminum products, which leads to the search for innovative and technological solutions; Clicklad™ is the answer to this requirement in interior or exterior design.
          </p>
        </div>
        <div className={styles.column2}>
          <img src="/AboutUs-Page/vision.png" alt="Vision Image" className={styles.image} />
        </div>
      </div>
      
      {/* Safety Section */}
      <div className={styles.safetyContainer}>
        <div className={styles.columnSafety2}>
          <img src="/AboutUs-Page/care.png" alt="Safety Image" className={styles.imageSafety} />
        </div>
        <div className={styles.columnSafety1}>
          <h1 className={styles.titleSafety}>We care about your best safety.</h1>
          <p className={styles.descriptionSafety}>
            Clicklad has been providing top-quality electrical services to the local community for over 15 years. Our team of licensed and experienced engineers are dedicated to delivering excellent quality products.
          </p>
          <ul className={styles.list}>
            <li>
              <img src="/icons/check-icon.png" alt="Check Icon" className={styles.icon} />
              Serving the community since 2009
            </li>
            <li>
              <img src="/icons/check-icon.png" alt="Check Icon" className={styles.icon} />
              Licensed and insured electricians
            </li>
            <li>
              <img src="/icons/check-icon.png" alt="Check Icon" className={styles.icon} />
              24/7 emergency services
            </li>
          </ul>
        </div>
      </div>
      
      {/* Accessible Section */}
      <div className={styles.container}>
        <div className={styles.column1}>
          <h1 className={styles.title}>Simple and accessible for all projects, no matter the size.</h1>
          <p className={styles.description}>
            Clicklad™ was developed by the installation method in click which saves a lot of time in installing the product. The company’s goal today is to make aluminum products accessible to every home in Canada by the simplicity of the product and to make aluminum products more affordable to the general public.
          </p>
        </div>
        <div className={styles.column2}>
          <img src="/AboutUs-Page/accessible.png" alt="Accessible Image" className={styles.image} />
        </div>
      </div>

      {/* Worker Section */}
      <div className={styles.workerContainer}>
        <div className={styles.columnWorker2}>
          <img src="/AboutUs-Page/worker.png" alt="Worker Image" className={styles.imageWorker} />
        </div>
        <div className={styles.columnWorker1}>
          <h1 className={styles.titleWorker}>Ready to upgrade your space?</h1>
          <p className={styles.descriptionWorker}>
            Contact our team today to schedule a free consultation and get a customized solution for your home or business.
          </p>
          <a href='/contact'><button className={styles.contactButton}>Contact Us</button></a>
        </div>
      </div>
    </div>
  );
}
