import React from "react";

const PageHeader = ({ owner, repository }) => {
  const headerDetails = (
    <div className="d-flex align-items-center">
      <div className="page-link-item page-link-main">{owner}</div>
      <span className="mx-2">/</span>
      <div className="page-link-item page-link-sub">{repository}</div>
    </div>
  );

  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          {owner && repository ? headerDetails : ""}
        </div>
      </nav>
    </React.Fragment>
  );
};

export default PageHeader;
