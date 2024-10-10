import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ items }) => {
  return (
    <ul className={styles.gallery}>
      {items.map((item) => (
        <li className={styles.galleryCard} key={item.id}>
          <ImageCard data={item} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
