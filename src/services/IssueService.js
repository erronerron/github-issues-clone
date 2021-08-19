import github from "../api/github";

const getAll = (owner, repository, page, per_page, status) => {
  return github.get(
    `repos/${owner}/${repository}/issues?page=${page}&per_page=${per_page}&state=${status}`
  );
};

const IssueService = {
  getAll,
};

export default IssueService;
