import React from "react";
import moment from "moment";

const TableListItem = ({ item }) => {
  const badges = item.labels.map((item, index) => {
    let badgeStyle = {
      backgroundColor: `#${item.color}`,
    };

    return (
      <span key={index} className="mx-2 badge rounded-pill" style={badgeStyle}>
        {item.name}
      </span>
    );
  });

  return (
    <div className="mx-2">
      <div>
        <a className="fw-bold text-decoration-none" href={item.html_url}>
          {item.title}
        </a>
        {badges}
      </div>
      <div>
        <span className="text-muted description">
          #{item.number} opened {moment(item.updated_at).fromNow()} by{" "}
          <a
            className="text-muted text-decoration-none description"
            href={item.user.html_url}
          >
            {item.user.login}
          </a>
        </span>
      </div>
    </div>
  );
};

export default TableListItem;
