import React from "react";
import styles from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.input.value;
    console.log(form.elements);
    if (form.elements.input.value.trim() === "") {
      toast.error("Please enter search term!");
      return;
    }
    onSubmit(topic);
    form.reset();
  };
  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.title}>Search photos here</h1>
        <div className={styles.boxForma}>
          <form onSubmit={handleSubmit}>
            <input
              className={styles.input}
              type="text"
              name="input"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
            <button className={styles.btn} type="submit">
              Search
            </button>
          </form>
        </div>
      </header>
    </div>
  );
};

export default SearchBar;
