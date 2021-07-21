const simpleGit = require('simple-git');

const git = simpleGit();

/**
 * placeholder
 * @returns {int} res
 * @param {int} res
 */
function onPush(res) {
  switch (res) {
    case null:
      console.log('Everything up to date');
      break;
    default:
      console.log(res);
  }
}

git.push('heroku', `${process.argv[2]}:main`, onPush).catch((e) => console.log(e));
