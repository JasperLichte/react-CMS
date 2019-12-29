const fs = require('fs-extra');
const childProcess = require('child_process');


try {
    // Remove current build
    fs.removeSync('./build/');

    // Transpile the typescript files
    childProcess.exec('tsc --build tsconfig.prod.json');

    // Copy package.json to build
    fs.copySync('./package.json', './build/package.json');
} catch (err) {
    console.log(err);
}
