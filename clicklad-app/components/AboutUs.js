import React from 'react';
import styles from './AboutUs.module.css';

export default function AboutUs() {
  return (
    <div className={styles.page}>
      {/* Vision Section */}
      <div className={styles.container}>
        <div className={styles.column1}>
          <h1 className={styles.title}>Maintenance Free</h1>
          <p className={styles.description}>
          Clicklad is made from extruded aluminum and then powder coated using the highest standards to achieve premium solid and woodgrain finishes. We have perfected the manufacturing process guaranteeing industry leading performance in all weather. Once installed, you can enjoy it for many years to come without the worry of scratching or staining when compared to composite or pvc siding.          </p>
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
          <h1 className={styles.titleSafety}>Game Changer in the fluted panel look</h1>
          <p className={styles.descriptionSafety}>
          The fluted panel is a staple in the modern look for residential and commercial properties. Until clicklad, designers and home owners were limited to the standard 1” or 2” wide panel that was offered. With clicklad being the first fluted aluminum siding in the industry combined with our proprietary installation system, we've designed a range of profiles which allow you to mix and match, allowing designs with 1”, 2”, 3”, 4” and 6” flutes. 
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
          <h1 className={styles.title}>Is Clicklad eco-friendly</h1>
          <p className={styles.description}>
          Clicklad is made from 100% recycled aluminum 6063. The material is also 100% recycleable. Due to it's light weight, we are able to reduce shipping costs as well as fuel consumption, minimizing the carbon footprint it creates to transport it. Clicklad is a green product as you will never have to stain or add any harsh chemicals to it to maintain it. 
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
