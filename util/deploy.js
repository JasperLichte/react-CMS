const fse = require('fs-extra');

(async ({rootDir, targetDir, dirsToDeploy}) => {
  try {
    if (!(await fse.exists(targetDir))) {
        await fse.mkdir(targetDir);
    } else {
        await fse.remove(targetDir);
        await fse.mkdir(targetDir);
    }

    for (const dir in dirsToDeploy) {
        (async () => await fse.copy(rootDir + dir, targetDir + dirsToDeploy[dir]))();
    }

    console.log(
      `Files are ready to be deployed: ${await fse.realpath(targetDir)}`
    );
  } catch (e) {
    console.log(e);
  }
})({
  rootDir: './',
  targetDir: './dist/',
  dirsToDeploy: {
    './server/build': 'server',
    './client/build': '/',
  },
});
