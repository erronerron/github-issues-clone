import { FETCH_ISSUES } from "../actions/types";

const initialState = [];

const issueReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_ISSUES:
      return payload;
    default:
      return state;
  }
};

export default issueReducer;
