import React, { Component } from "react";
import TableList from "../components/TableList";
import PaginationItem from "./../components/PaginationItem";

const IssuesList = () => {
  return (
    <div>
      <TableList />
      <PaginationItem />
    </div>
  );
};

export default IssuesList;
