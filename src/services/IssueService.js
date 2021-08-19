import github from "../api/github";

const getAll = (owner, repository, page, per_page, status) => {
  return github.get(
    `repos/${owner}/${repository}/issues?page=${page}&per_page=${per_page}&state=${status}`
  );
};

const getById = (owner, repository, id) => {
  return github.get(`repos/${owner}/${repository}/issues/${id}`);
};

const IssueService = {
  getAll,
  getById,
};

export default IssueService;
