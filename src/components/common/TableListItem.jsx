import React from "react";

const TableListItem = ({ item }) => {
  return (
    <div className="mx-2">
      <div>
        <a className="fw-bold text-decoration-none" href="/">
          {item.title}
        </a>
        <span className="mx-2 badge rounded-pill bg-warning text-dark">
          {item.type}
        </span>
      </div>
      <div>
        <span className="text-muted description">
          #{item.id} opened on {item.date} by{" "}
          <a className="text-muted text-decoration-none description" href="/">
            {item.author}
          </a>
        </span>
      </div>
    </div>
  );
};

export default TableListItem;
