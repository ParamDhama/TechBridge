import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState(""); // State to track search input

  // Handle search input change
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value); // Update query state
    onSearch(value); // Trigger filtering function passed from parent
  };

  return (
    <div className="p-4 w-full">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
        className="border border-gray-300 p-2 w-full rounded-md"
      />
    </div>
  );
};

export default SearchBar;
