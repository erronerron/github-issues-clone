import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import IssuesList from "./components/pages/IssuesList";
// import IssuesDetail from "./components/pages/IssuesDetail";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact component={IssuesList}></Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
