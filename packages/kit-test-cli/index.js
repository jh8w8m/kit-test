'use strict';

const initKit = require('./lib/initKit');

const currentNodeVersion = process.versions.node; // major.minor.patch
const major = currentNodeVersion.split('.')[0];

if (major < 14) {
    console.error(
        `你正在使用的node版本为${currentNodeVersion}. \n` +
        'kit默认使用的环境为 node 14 或者更高. \n'
    );
    process.exit(1);
}

initKit();