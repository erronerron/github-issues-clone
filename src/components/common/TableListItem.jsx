import React from "react";
import { RiRecordCircleLine } from "react-icons/ri";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { formattedDate } from "../../utils/fomatter";
import BadgeItem from "./BadgeItem";

const TableListItem = ({ item }) => {
  const badges = (items = []) => {
    return items.map((item, index) => {
      return <BadgeItem key={index} item={item} />;
    });
  };

  const getLabel = (item) => {
    const user_link = (
      <a
        className="text-muted text-decoration-none description"
        href={item.user.html_url}
      >
        {item.user.login}
      </a>
    );

    if (item.state === "open") {
      return (
        <span>
          #{item.number} opened {formattedDate(item.updated_at)} by {user_link}
        </span>
      );
    }

    return (
      <span>
        #{item.number} by {user_link} was closed{" "}
        {formattedDate(item.updated_at)}
      </span>
    );
  };

  const iconLabel = (state) => {
    if (state === "open") {
      return (
        <IconContext.Provider value={{ color: "#6BC46D" }}>
          <div>
            <RiRecordCircleLine />
          </div>
        </IconContext.Provider>
      );
    }

    return (
      <IconContext.Provider value={{ color: "red" }}>
        <div>
          <IoCheckmarkCircleOutline />
        </div>
      </IconContext.Provider>
    );
  };

  return (
    <div className="mx-2">
      <div className="d-flex">
        <div className="me-2">{iconLabel(item.state)}</div>
        <div>
          <div>
            <Link
              className="fw-bold text-decoration-none"
              to={`/${item.number}`}
            >
              {item.title}
            </Link>
            {badges(item.labels ?? [])}
          </div>
          <div>
            <span className="text-muted description">{getLabel(item)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableListItem;
