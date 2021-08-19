import React from "react";
import { useSelector } from "react-redux";

const PageHeader = () => {
  const repo = useSelector((state) => state.repo);

  const headerDetails = (
    <div className="d-flex align-items-center">
      <div className="page-link-item page-link-main">{repo.owner?.login}</div>
      <span className="mx-2">/</span>
      <div className="page-link-item page-link-sub">{repo.name}</div>
    </div>
  );

  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          {repo.owner && repo.name ? headerDetails : ""}
        </div>
      </nav>
    </React.Fragment>
  );
};

export default PageHeader;
