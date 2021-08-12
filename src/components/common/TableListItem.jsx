import React from "react";

const TableListItem = ({ item }) => {
  const titleLinkStyle = {
    color: "#fff",
    textDecoration: "none",
  };

  const subtitleLinkStyle = {
    textDecoration: "none",
    fontSize: "13px",
  };

  const userLinkStyle = {
    textDecoration: "none",
    fontSize: "13px",
  };

  return (
    <div className="row mx-1">
      <div className="col">
        <div>
          <a className="fw-bold" style={titleLinkStyle} href="/">
            {item.title}
          </a>
          <span className="mx-2 badge rounded-pill bg-warning text-dark">
            {item.type}
          </span>
        </div>
        <div>
          <span className="text-muted" style={subtitleLinkStyle}>
            #{item.id} opened on {item.date} by{" "}
            <a className="text-muted" style={userLinkStyle} href="/">
              {item.author}
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TableListItem;
