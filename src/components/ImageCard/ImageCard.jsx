import React from "react";
import styles from "./ImageCard.module.css";

const ImageCard = ({ data }) => {
  return (
    <div>
      <img
        className={styles.photoCard}
        src={data.urls.small}
        alt={data.alt_description}
      />
      <div className={styles.cardUl}>
        <p className={styles.cardInfo}>Likes:{data.likes}</p>
      </div>
    </div>
  );
};

export default ImageCard;
