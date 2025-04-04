import React from 'react';
import styles from './LocationList.module.css';

const LocationList = ({ locationData }) => {
  return (
    <div className={styles.container}>
      <h1>HTTP 404 Error: Page Does Not Exist</h1>
      {/* <h2 className={styles.pageTitle}>Find a Location Near You</h2>
      {locationData.map((provinceData, index) => (
        <div key={index} className={styles.provinceSection}>
          <h2 className={styles.provinceTitle}>{provinceData.province}</h2>
          <div className={styles.locationCards}>
            {provinceData.locations.map((location, i) => (
              <div key={i} className={styles.card}>
                <h3 className={styles.cardTitle}>{location.name}</h3>
                <p className={styles.cardAddress}>{location.address}</p>
                <p className={styles.cardCity}>{location.city}, {provinceData.provinceAbreviation}</p>
                <p className={styles.cardPostalCode}>{location.postalCode}</p>
                <p className={styles.cardPhone}>
                  <img 
                    src="/icons/phone-icon-green.png" 
                    alt="Phone Icon" 
                    className={styles.icon} 
                  />
                  {location.phone}
                </p>
                <p className={styles.cardEmail}>
                  <img 
                    src="/icons/email-icon-green.png" 
                    alt="Email Icon" 
                    className={styles.icon} 
                  />
                  {location.email}
                </p>
                <div className={styles.directionsContainer}>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.directionsLink}
                  >
                    GET DIRECTIONS
                  </a>
                  <hr className={styles.hrLine} />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default LocationList;
