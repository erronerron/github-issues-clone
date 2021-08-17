import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import github from "../../api/github";
import TableList from "../common/TableList";
import PaginationItem from "../common/PaginationItem";
import RadioButtonGroup from "../common/RadioButtonGroup";
import TextInput from "../common/TextInput";

const IssuesList = () => {
  const { search } = useLocation();
  const values = queryString.parse(search);

  const [issues, setIssues] = useState([]);

  const [page, setPage] = useState(values.page ?? 1);
  const [lastPage, setLastPage] = useState(false);
  const itemsPerPage = 10;

  const [searchInput, setSearchInput] = useState(values.search ?? "");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await github.get("repos/mui-org/material-ui/issues", {
          params: {
            page: page,
            per_page: itemsPerPage,
            labels: searchInput,
            filter: searchInput,
          },
        });

        setLastPage(response.data.length === 0 || response.data.length < 10);
        setIssues(response.data ?? []);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [page, searchInput]);

  const handlePageChange = (pageNum) => {
    setPage(pageNum);
  };

  const handleInputChange = (text) => {
    setSearchInput(text);
  };

  return (
    <div className="container my-3">
      <div className="card bg-dark text-white">
        <div className="card-header d-flex">
          <div className="p-1">
            <RadioButtonGroup />
          </div>
          <div className="p-1">
            <TextInput text={searchInput} onInputChange={handleInputChange} />
          </div>
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
