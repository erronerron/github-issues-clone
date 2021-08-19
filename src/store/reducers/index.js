import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import issueReducer from "./issueReducer";
import repoReducer from "./repoReducer";

export default combineReducers({
  form: formReducer,
  issues: issueReducer,
  repo: repoReducer,
});
