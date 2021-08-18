import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import issueReducer from "./issueReducer";

export default combineReducers({
  form: formReducer,
  issues: issueReducer,
});
