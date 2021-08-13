import React from "react";

const PaginationItem = ({ page, itemsPerPage, totalItems, onPageChange }) => {
  const handlePreviousPageClick = (e) => {
    if (page <= 1) return;
    onPageChange(page - 1);
  };

  const handleNextPageClick = (e) => {
    if (page >= Math.ceil(totalItems / itemsPerPage)) return;
    onPageChange(page + 1);
  };

  const handlePageClick = (e) => {
    if (e.target.value === page) return;
    onPageChange(e.target.value);
  };

  return (
    <React.Fragment>
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <button className="page-link" onClick={handlePreviousPageClick}>
              Previous
            </button>
          </li>

          <li className="page-item active">
            <button className="page-link" value="1" onClick={handlePageClick}>
              1
            </button>
          </li>

          <li className="page-item">
            <button className="page-link" onClick={handleNextPageClick}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default PaginationItem;
