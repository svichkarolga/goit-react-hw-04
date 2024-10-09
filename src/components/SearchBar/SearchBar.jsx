import React from "react";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.input.value;
    console.log(form.elements);
    if (form.elements.input.value.trim() === "") {
      alert("Please enter search term!");
      return;
    }
    onSubmit(topic);
    form.reset();
  };
  return (
    <div>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="input"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </form>
      </header>
    </div>
  );
};

export default SearchBar;
