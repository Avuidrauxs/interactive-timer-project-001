const simpleGit = require('simple-git');
const git = simpleGit();

console.log('heroku', `${process.argv[2]}:main`)

function onPush(res) {
    switch(res) {
        case null:
            console.log('Everything up to date');
            break;
        default:
            console.log(res);
    }
}

// async function pushBranch() {
//     try {
//         await git.push('heroku', `${process.argv[2]}:main`, onPush)
//     } catch(error) {
//         console.log(error)
//     }
// }

// pushBranch();

git.push('heroku', `${process.argv[2]}:main`, onPush).catch((e) => console.log(e))