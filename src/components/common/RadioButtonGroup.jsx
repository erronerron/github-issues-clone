import React from "react";
import { useHistory } from "react-router";
import queryString from "query-string";

const RadioButtonGroup = ({ items, selected, onSelectItem }) => {
  const history = useHistory();
  const parsed = queryString.parse(history.location.search);

  const handleClick = (item) => {
    parsed.status = item;

    history.push({
      search: queryString.stringify(parsed)
    });

    onSelectItem(item);
  }

  return (
    <div className="btn-group" role="group">
      {items.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <button
              type="button"
              className={`btn btn-sm ${
                item === selected
                  ? "btn-primary disabled"
                  : "btn-outline-secondary"
              }`}
              onClick={() => handleClick(item)}
              value={item}
            >
              {item}
            </button>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default RadioButtonGroup;
