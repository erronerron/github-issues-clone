import github from "../../api/github";
import { FETCH_ISSUES } from "./types";

export const fetchIssues = (formValues) => async (dispatch) => {
  try {
    const response = await github.get(
      `repos/${formValues.owner}/${formValues.repository}/issues`
    );
    dispatch({ type: FETCH_ISSUES, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_ISSUES, payload: [] });
  }
};
