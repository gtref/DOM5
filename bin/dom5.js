#!/usr/bin/env node

const { Command } = require('commander');
const { version } = require('../package.json');

const program = new Command();

program
  .name('DOM5')
  .description('A simple CLI for the DOM5 library.')
  .version(version, '-v, --version', 'output the current version');

program.parse(process.argv);
