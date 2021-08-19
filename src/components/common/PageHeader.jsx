import React from "react";

const PageHeader = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="my-2 mx-2">
            <a
              className="page-link-item page-link-main"
              href="https://github.com/mui-org"
            >
              mui-org
            </a>
            <span className="mx-2">/</span>
            <a
              className="page-link-item page-link-sub"
              href="https://github.com/mui-org/material-ui"
            >
              material-ui
            </a>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default PageHeader;
