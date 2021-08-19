import React from "react";

const IssuesDetail = () => {
  return (
    <div className="container my-3">
      <div className="card bg-dark text-white">
        <div className="card-header align-items-center">
          <h1 className="page-detail-title">{`Title Description #1201`}</h1>
          <div className="d-flex">
            <div>
              <span className="badge rounded-pill bg-success page-detail-badge">
                Success
              </span>
            </div>
            <div className="mx-2">
              <span className="page-detail-subtitle">{`Juan Dela Cruz opened this issue 9 hours ago`}</span>
              <div className="my-1">
                <span className="mx-1 badge rounded-pill bg-success">
                  Success
                </span>
                <span className="mx-1 badge rounded-pill bg-success">
                  Success
                </span>
                <span className="mx-1 badge rounded-pill bg-success">
                  Success
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="card-footer d-flex justify-content-center"></div>
      </div>
    </div>
  );
};

export default IssuesDetail;
