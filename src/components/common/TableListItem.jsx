import React from "react";
import moment from "moment";
import { RiRecordCircleLine } from "react-icons/ri";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { IconContext } from "react-icons";

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

  const formattedDate = (date) => {
    const itemDate = moment(date);
    if (moment().diff(moment(date), "days") <= 30) {
      return itemDate.fromNow();
    }
    if (itemDate.isSame(new Date(), "year")) {
      return itemDate.format("MMM DD");
    }
    return itemDate.format("MMM DD, YYYY");
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
            <a className="fw-bold text-decoration-none" href={item.html_url}>
              {item.title}
            </a>
            {badges}
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
