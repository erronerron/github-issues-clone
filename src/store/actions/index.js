import { FETCH_ISSUES } from "./types";
import { FETCH_REPO } from "./types";
import IssueService from "../../services/IssueService";
import RepoService from "../../services/RepoService";

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

export const fetchRepo = (owner, repository) => async (dispatch) => {
  try {
    const response = await RepoService.getAll(owner, repository);

    dispatch({
      type: FETCH_REPO,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_REPO,
      payload: {},
    });
  }
};
