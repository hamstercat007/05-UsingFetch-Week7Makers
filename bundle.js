(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // fetchGithubRepo.js
  var require_fetchGithubRepo = __commonJS({
    "fetchGithubRepo.js"(exports, module) {
      var repoName = "sinatra/sinatra";
      var fetchGithubRepo2 = fetch(`https://api.github.com/repos/${repoName}`).then((response) => response.json()).then((jsonData) => {
        console.log(jsonData);
      });
      module.exports = fetchGithubRepo2;
    }
  });

  // index.js
  var fetchGithubRepo = require_fetchGithubRepo();
})();
