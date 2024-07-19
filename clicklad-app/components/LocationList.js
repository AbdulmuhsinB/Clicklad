import React from 'react';
import styles from './LocationList.module.css'; // Import your CSS module

const LocationList = ({ locationData }) => {
  return (
    <div className={styles.container}>
      <h2>Find a Location Near You</h2>
      {locationData.map((provinceData, index) => (
        <div key={index} className={styles.provinceSection}>
          <h2 className={styles.provinceTitle}>{provinceData.province}</h2>
          <div className={styles.locationCards}>
            {provinceData.locations.map((location, i) => (
              <div key={i} className={styles.card}>
                <h3 className={styles.cardTitle}>{location.name}</h3>
                <p className={styles.cardAddress}>{location.address}</p>
                <p className={styles.cardPhone}>{location.phone}</p>
                <p className={styles.cardEmail}>{location.email}</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.directionsLink}
                >
                  Get Directions
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LocationList;
