import React from "react";

const RadioButtonGroup = ({ items, selected, onSelectItem }) => {
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
              onClick={onSelectItem}
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
