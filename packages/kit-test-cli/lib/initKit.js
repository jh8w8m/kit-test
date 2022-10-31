'use strict';

const https = require('https');
const url = require('url');
const dns = require('dns');
const os = require('os');

const commandList = require('kit-test-command');
const { chalk, command, fse } = require('kit-test-utils');

// const envinfo = require('envinfo');
// const execSync = require('child_process').execSync;
// const hyperquest = require('hyperquest');
// const prompts = require('prompts');
// const path = require('path');
// const semver = require('semver');
// const spawn = require('cross-spawn');
// const tmp = require('tmp');
//const unpack = require('tar-pack').unpack;
// const validateProjectName = require('validate-npm-package-name');

const pkgJson = require('../package.json');

const initKit = () => {
    const cli = new command.Command(pkgJson.name)
        .version(pkgJson.version)
        .usage('<command> [options]');

    commandList.forEach((item) => {
        console.log(item);
        Object.keys(item).map((key) => {
            if (key === 'option') {
                item[key].map((optArr)=>{
                    cli.option(...optArr);
                });
            } else {
                cli[key](item[key]);
            }
        })
    });


    cli.parse(process.argv);
}

module.exports = initKit;