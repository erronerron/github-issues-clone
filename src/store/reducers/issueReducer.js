import _ from "lodash";
import { FETCH_ISSUES } from "../actions/types";

const issueReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ISSUES:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
};

export default issueReducer;
