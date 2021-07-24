/* eslint-disable no-console */
const simpleGit = require('simple-git');

const git = simpleGit();

git.push('heroku', process.argv[2] !== undefined ? `${process.argv[2]}:main` : 'main', (res) => console.log(res)).catch((e) => console.log(e));
