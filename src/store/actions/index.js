import { FETCH_ISSUES, FETCH_REPO, FETCH_ISSUE } from "./types";
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

export const fetchIssue = (owner, repository, id) => async (dispatch) => {
  try {
    const response = await IssueService.getById(owner, repository, id);

    dispatch({
      type: FETCH_ISSUE,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_ISSUE,
      payload: {},
    });
  }
};
