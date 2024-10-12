import React from "react";
import styles from "./ErrorMessage.module.css";

const ErrorMessage = (message) => {
  return (
    <div className={styles.error}>
      <p>Whoops, something went wrong! Please try reloading this page!</p>
    </div>
  );
};

export default ErrorMessage;
