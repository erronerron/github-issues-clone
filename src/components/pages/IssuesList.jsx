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

  const [page, setPage] = useState(1);
  const [totalIssues, setTotalIssues] = useState(100);
  const itemsPerPage = 10;

  const handlePageChange = (pageNum) => {
    setPage(pageNum);
  };

  return (
    <div className="container my-3">
      <div className="card bg-dark text-white">
        <div className="card-header">
          <RadioButtonGroup />
        </div>

        <TableList issues={issues} />

        <div className="card-footer d-flex justify-content-center">
          <PaginationItem
            page={page}
            itemsPerPage={itemsPerPage}
            totalItems={totalIssues}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default IssuesList;
