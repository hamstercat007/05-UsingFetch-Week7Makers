const repoName = "sinatra/sinatra";

const fetchGithubRepo = fetch(`https://api.github.com/repos/${repoName}`)
  .then((response) => response.json())
  .then((jsonData) => {
    console.log(jsonData);
  });

module.exports = fetchGithubRepo;

//this is the page and not a class though
