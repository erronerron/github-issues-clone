import github from "../api/github";

const getAll = (owner, repository) => {
  return github.get(`repos/${owner}/${repository}`);
};

const RepoService = {
  getAll,
};

export default RepoService;
