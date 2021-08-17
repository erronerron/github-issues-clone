import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import github from "../../api/github";
import TableList from "../common/TableList";
import PaginationItem from "../common/PaginationItem";
import RadioButtonGroup from "../common/RadioButtonGroup";

const IssuesList = () => {
  // Query Parameters
  const { search } = useLocation();
  const parsed = queryString.parse(search);

  // List of issues
  const [issues, setIssues] = useState([]);

  // Status filter
  const [status, setStatus] = useState(parsed.status ?? "Open");
  const statuses = ["All", "Open", "Closed"];

  // Pagination
  const [page, setPage] = useState(parsed.page ?? 1);
  const [lastPage, setLastPage] = useState(false);
  const itemsPerPage = 10;

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await github.get("repos/mui-org/material-ui/issues", {
          params: {
            page: page,
            per_page: itemsPerPage,
            state: status.toLowerCase(),
          },
        });

        setLastPage(response.data.length === 0 || response.data.length < 10);
        setIssues(response.data ?? []);
      } catch (error) {
        console.log(error.response);
      }
    };

    getData();
  }, [page, status]);

  const handleSelectStatus = (status) => {
    setStatus(status);
  };

  const handlePageChange = (pageNum) => {
    setPage(pageNum);
  };

  return (
    <div className="container my-3">
      <div className="card bg-dark text-white">
        <div className="card-header">
          <RadioButtonGroup
            items={statuses}
            selected={status}
            onSelectItem={handleSelectStatus}
          />
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
