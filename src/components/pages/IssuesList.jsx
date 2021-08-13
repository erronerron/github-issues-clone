import React, { useState, useEffect } from "react";
import github from "../../api/github";
import TableList from "../common/TableList";
import PaginationItem from "../common/PaginationItem";
import RadioButtonGroup from "../common/RadioButtonGroup";

const IssuesList = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await github.get("repos/mui-org/material-ui/issues");
        setIssues(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

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
