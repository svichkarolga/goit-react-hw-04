import React from "react";
import styles from "./ImageCard.module.css";

const ImageCard = ({ data, onImageClick }) => {
  const handleClick = () => {
    console.log("Full image URL:", data.urls.regular);
    onImageClick({
      imageUrl: data.urls.regular,
      author: data.user.name,
      description: data.description,
    });
  };
  return (
    <div>
      <img
        className={styles.photoCard}
        src={data.urls.small}
        alt={data.alt_description}
        onClick={handleClick} // Використовуємо функцію handleClick
        style={{ cursor: "pointer" }}
      />

      <div className={styles.cardUl}>
        <p className={styles.cardInfo}>Likes:{data.likes}</p>
      </div>
    </div>
  );
};

export default ImageCard;
