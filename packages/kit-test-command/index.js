'use strict';

const { chalk } = require('kit-test-utils');

const commandList = [
    {
        command: 'build',
        description: '打包',
        option: [
            ['--map', '开启sourcemap'],
            ['--min', '开启压缩'],
        ],
        allowUnknownOption: true,
        action: (options) => {
            require('./lib/build')(options);
        },
    },
];

const generateHelpText = () => {
    const helpOption = {
        command: 'help',
        description: '帮助',
        action: () => {     
            // TODO: extra message
            
            console.log();
            console.log(
                `    目前项目所属仓库:`
            );
            console.log(
                `    ${chalk.cyan('https://github.com/jh8w8m/kit-test')}`
            );
            console.log();
        },
    };

    return helpOption;
}

commandList.push(generateHelpText());


module.exports = commandList;
