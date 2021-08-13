import React from "react";
import TableListItem from "./TableListItem";

const TableList = ({ issues }) => {
  const issuesList = issues.map((item, index) => {
    return (
      <tr key={index}>
        <td>
          <TableListItem item={item} />
        </td>
      </tr>
    );
  });

  return (
    <React.Fragment>
      <table className="table table-hover table-dark">
        <tbody>{issuesList}</tbody>
      </table>
    </React.Fragment>
  );
};

export default TableList;
