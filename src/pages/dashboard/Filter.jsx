import React from "react";

const Filter = ({ selectedFilter, onFilterChange }) => (
  <select value={selectedFilter} onChange={(e) => onFilterChange(e.target.value)}>
    <option value="">All</option>
    <option value="popular">Popular</option>
    <option value="recent">Recent</option>
    {/* Add more options as needed */}
  </select>
);

export default Filter;
