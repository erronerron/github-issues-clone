import { FETCH_ISSUES } from "./types";
import IssueService from "../../services/IssueService";

export const fetchIssues =
  (owner, repository, page, per_page, status) => async (dispatch) => {
    try {
      const response = await IssueService.getAll(
        owner,
        repository,
        page,
        per_page,
        status
      );

      dispatch({
        type: FETCH_ISSUES,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_ISSUES,
        payload: [],
      });
    }
  };
