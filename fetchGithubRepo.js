const fetchGithubRepo = (repoName, onDataFetched) => {
  fetch("https://api.github.com/repos/" + repoName)
    .then((response) => response.json())
    .then(onDataFetched);
};

module.exports = fetchGithubRepo;
