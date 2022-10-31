'use strict';

const kitTestCli = require('..');
const assert = require('assert').strict;

assert.strictEqual(kitTestCli(), 'Hello from kitTestCli');
console.info("kitTestCli tests passed");
