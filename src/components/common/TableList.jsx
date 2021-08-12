import React from "react";
import TableListItem from "./TableListItem";

const TableList = () => {
  return (
    <React.Fragment>
      <table className="table table-hover table-dark">
        <tbody>
          <tr>
            <td>
              <TableListItem />
            </td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default TableList;
