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
