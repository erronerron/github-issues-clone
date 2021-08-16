import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import github from "../../api/github";
import TableList from "../common/TableList";
import PaginationItem from "../common/PaginationItem";
import RadioButtonGroup from "../common/RadioButtonGroup";

const IssuesList = () => {
  const { search } = useLocation();
  const values = queryString.parse(search);

  const [issues, setIssues] = useState([]);
  const [status, setStatus] = useState(values.status ?? "Open");
  const statuses = ["All", "Open", "Closed"];

  const [page, setPage] = useState(values.page ?? 1);
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

  const handleSelectItem = (e) => {
    setStatus(e.target.value);
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
            onSelectItem={handleSelectItem}
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
