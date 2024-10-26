import React from "react";

const Pagination = ({ currentPage, isNext, onPageChange }) => (
  <div className="pagination">
    {currentPage > 1 && (
      <button onClick={() => onPageChange(currentPage - 1)}>Previous</button>
    )}
    {isNext && <button onClick={() => onPageChange(currentPage + 1)}>Next</button>}
  </div>
);

export default Pagination;
