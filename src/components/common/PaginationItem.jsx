import React from "react";
import { useHistory } from "react-router";

const PaginationItem = ({ page, lastPage, onPageChange }) => {
  const history = useHistory();

  const handlePreviousPageClick = (e) => {
    page = parseInt(page);
    if (page <= 1) return;
    onPageChange(page - 1);

    history.push({
      pathname: '/',
      search: `?page=${page - 1}`
    });
  };

  const handleNextPageClick = (e) => {
    page = parseInt(page);
    if (lastPage) return;
    onPageChange(page + 1);

    history.push({
      pathname: '/',
      search: `?page=${page + 1}`
    });
  };

  

  return (
    <React.Fragment>
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <button
              className={page === 1 ? "btn btn-dark disabled" : "btn btn-dark"}
              onClick={handlePreviousPageClick}
            >
              Previous
            </button>
          </li>

          <li className="page-item">
            <button className="btn btn-primary readonly" value={page}>
              {page}
            </button>
          </li>

          <li className="page-item">
            <button
              className={lastPage ? "btn btn-dark disabled" : "btn btn-dark"}
              onClick={handleNextPageClick}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );

  
};

export default PaginationItem;
