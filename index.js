'use strict';

const files = require('./lib/files');
require('./lib/logger')

const inputFileName = process.argv[2];
const buffer = process.argv[3];
files.alterFile(inputFileName, buffer);