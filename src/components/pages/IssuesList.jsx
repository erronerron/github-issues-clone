import React, { useState } from "react";
import TableList from "../common/TableList";
import PaginationItem from "../common/PaginationItem";
import RadioButtonGroup from "../common/RadioButtonGroup";

const IssuesList = () => {
  const [issues, setIssues] = useState([
    {
      id: 223,
      title: "Sample Title 1",
      description: "Sample description",
      date: "2020-12-01",
      author: "Juan dela cruz",
      type: "feature request",
    },
    {
      id: 32452,
      title: "Sample Title 2",
      description: "Sample description",
      date: "2021-01-01",
      author: "Juan dela cruz",
      type: "feature request",
    },
    {
      id: 4096,
      title: "Sample Title 3",
      description: "Sample description",
      date: "2019-01-01",
      author: "Maria dela cruz",
      type: "feature request",
    },
  ]);

  const [status, setStatus] = useState("Open");
  const statuses = ["All", "Open", "Closed"];

  const handleSelectItem = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className="container my-3">
      <div className="card bg-dark text-white">
        <div className="card-header">
          <RadioButtonGroup
            items={statuses}
            selected={status}
            onSelectItem={handleSelectItem}
          />
        </div>

        <TableList issues={issues} />

        <div className="card-footer d-flex justify-content-center">
          <PaginationItem />
        </div>
      </div>
    </div>
  );
};

export default IssuesList;
