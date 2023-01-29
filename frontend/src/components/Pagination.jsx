import React from "react";
import "../styles/pagination.css";

const Pagination = ({ itemQuantity, setCurrentPage, allItems }) => {
  let pages = []; // empty array of pages
  for (let i = 1; i <= Math.ceil(allItems / itemQuantity); i++) {
    // starting on page 1, the array will calculate the # of pages needed to hold 12 items per page, rounded up with ceil
    pages.push(i); //added to empty array one by one
  }
  return (
    <>
      {pages.map((page, i) => {
        return (
          <button
            key={i}
            onClick={() => setCurrentPage(page)}
            className="paginationBtn"
          >
            {page}
          </button>
        );
      })}
    </>
  );
};

export default Pagination;
