import React, { useState } from "react";

function SearchInput({ onSearch }) {
  const [city, setCity] = useState("");

  function handleSearch() {
    onSearch(city);
  }

  return (
    <div className="search-bar">
      <input
        className="search-field"
        type="text"
        placeholder="Search City..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <button className="search-btn" onClick={() => handleSearch()}>
        Search
      </button>
    </div>
  );
}

export default SearchInput;
