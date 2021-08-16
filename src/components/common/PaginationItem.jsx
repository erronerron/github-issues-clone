import React from "react";

const PaginationItem = ({ page, lastPage, onPageChange }) => {

  const handlePreviousPageClick = (e) => {
    page = parseInt(page);
    if (page <= 1) return;
    onPageChange(page - 1);
  };

  const handleNextPageClick = (e) => {
    page = parseInt(page);
    if(lastPage) return;
    onPageChange(page + 1);
  };

  return (
    <React.Fragment>
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <button 
              className={page === 1 ? "btn btn-dark disabled" : "btn btn-dark"}
              onClick={handlePreviousPageClick}>
               Previous 
            </button>
          </li>

          <li className="page-item">
            <button 
              className={lastPage ? "btn btn-dark disabled" : "btn btn-dark"}
              onClick={handleNextPageClick}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default PaginationItem;
