// StatCard.jsx
import React from "react";
import styles from "./Cards.module.css";

const Cards = ({ number, description, icon }) => {
  return (
    <div className={styles.statCard}>
      <div className={styles.statInfo}>
        <h2>{number}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.statIcon}>
        <img src={icon} alt={description} />
      </div>
    </div>
  );
};

export default Cards;