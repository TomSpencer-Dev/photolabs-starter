import React from "react";
import { useState } from "react";
import "../styles/SearchBar.scss";

const SearchBar = ({ filterPhotos }) => {
  const [text, setText] = useState('');

  const handleText = (e) => {
    setText(e.target.value);
  };

  return (
    <div className = "SearchBar">
      <label>
        Search: <input type="text" name="searchBar" value={text} onChange={handleText} />
      </label>
      <button type="submit" onClick={() => filterPhotos(text)} >Search</button>
    </div>
  );

};

export default SearchBar;