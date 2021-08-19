import { FETCH_ISSUE } from "../actions/types";

const initialState = {};

const issueItemReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_ISSUE:
      return payload;
    default:
      return state;
  }
};

export default issueItemReducer;
