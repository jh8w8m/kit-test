'use strict';

const kitTestCommand = require('..');
const assert = require('assert').strict;

assert.strictEqual(kitTestCommand(), 'Hello from kitTestCommand');
console.info("kitTestCommand tests passed");
