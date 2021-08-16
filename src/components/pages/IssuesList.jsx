import React, { useState, useEffect } from "react";
import github from "../../api/github";
import TableList from "../common/TableList";
import PaginationItem from "../common/PaginationItem";
import RadioButtonGroup from "../common/RadioButtonGroup";

const IssuesList = () => {
  const [issues, setIssues] = useState([]);

  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(false);
  const itemsPerPage = 10;

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await github.get("repos/mui-org/material-ui/issues", {
          params: {
            page: page,
            per_page: itemsPerPage,
          }
        });

        setLastPage((response.data.length === 0 || response.data.length < 10));
        setIssues(response.data ?? []);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [page]);

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
            lastPage={lastPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default IssuesList;
