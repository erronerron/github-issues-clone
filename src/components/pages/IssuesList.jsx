import React, { useState } from "react";
import TableList from "../common/TableList";
import TextInput from "../common/TextInput";
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

  return (
    <div className="container my-3">
      <div className="card bg-dark text-white">
        <div className="card-header">
          <div className="row">
            <div className="col">
              <TextInput />
            </div>
            <div className="col-2 d-flex flex-row-reverse">
              <RadioButtonGroup />
            </div>
          </div>
        </div>
        <TableList issues={issues} />
      </div>
    </div>
  );
};

export default IssuesList;
