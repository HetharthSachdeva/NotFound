import React, { useState } from "react";

const LocalSearchBar = ({ onSearch, placeholder }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    onSearch(input);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={placeholder}
      />
      <button className="btn"onClick={handleSearch}>Search</button>
    </div>
  );
};

export default LocalSearchBar;
