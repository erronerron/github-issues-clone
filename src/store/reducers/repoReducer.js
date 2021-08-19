import { FETCH_REPO } from "../actions/types";

const initialState = { owner: { login: "facebook" }, name: "react" };

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
