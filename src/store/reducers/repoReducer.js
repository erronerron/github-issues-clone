import { FETCH_REPO } from "../actions/types";

const initialState = {};

const repoReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_REPO:
      return payload;
    default:
      return state;
  }
};

export default repoReducer;
