import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

import { fetchIssues } from "../../store/actions";
import TableList from "../common/TableList";
import PaginationItem from "../common/PaginationItem";
import RadioButtonGroup from "../common/RadioButtonGroup";
import SearchForm from "../common/SearchForm";

const IssuesList = (props) => {
  const issues = useSelector((state) => state.issues);
  const dispatch = useDispatch();

  // Query Parameters
  const { search } = useLocation();
  const parsed = queryString.parse(search);

  // Repository Information
  const [owner, setOwner] = useState("");
  const [repository, setRepository] = useState("");

  // Status filter
  const [status, setStatus] = useState(parsed.status ?? "open");
  const statuses = ["all", "open", "closed"];

  // Pagination
  const [page, setPage] = useState(parsed.page ?? 1);
  const itemsPerPage = 10;

  useEffect(() => {
    dispatch(fetchIssues(owner, repository, page, itemsPerPage, status));
  }, [dispatch, owner, repository, page, status]);

  const handleSelectStatus = (status) => {
    setPage(1);
    setStatus(status);
  };

  const handlePageChange = (pageNum) => {
    setPage(pageNum);
  };

  const handleFormSubmit = (formValues) => {
    setOwner(formValues.owner);
    setRepository(formValues.repository);
  };

  return (
    <div className="container my-3">
      <div className="card bg-dark text-white card-prop">
        <div className="card-header d-flex justify-content-between">
          <RadioButtonGroup
            items={statuses}
            selected={status}
            onSelectItem={handleSelectStatus}
          />
          <SearchForm onFormSubmit={handleFormSubmit} />
        </div>

        {issues.length ? (
          <TableList issues={issues} />
        ) : (
          <div className="text-center">No records found.</div>
        )}

        <div className="card-footer d-flex justify-content-center">
          {issues.length ? (
            <PaginationItem page={page} onPageChange={handlePageChange} />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default IssuesList;
