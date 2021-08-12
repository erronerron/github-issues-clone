import React from "react";

const PaginationItem = () => {
  const linkStyle = {
    color: "#fff",
    backgroundColor: "transparent",
    borderColor: "transparent",
  };

  return (
    <React.Fragment>
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" style={linkStyle} href="/">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" style={linkStyle} href="/">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" style={linkStyle} href="/">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" style={linkStyle} href="/">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" style={linkStyle} href="/">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default PaginationItem;
