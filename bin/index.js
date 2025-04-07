#!/usr/bin/env node

const { program } = require('commander');
const stats = require('../commands/stats');
const fs = require('../commands/filesystem');

program
  .version('1.0.0')
  .description('A CLI for statistical operations and file management');

// Statistics Commands
program
  .command('stats')
  .description('Perform statistical operations on a series of numbers')
  .argument('<numbers...>', 'Space-separated numbers')
  .option('-m, --mean', 'Calculate mean')
  .option('-d, --median', 'Calculate median')
  .option('-s, --stdev', 'Calculate standard deviation')
  .option('-v, --variance', 'Calculate variance')
  .option('-n, --min', 'Find minimum value')
  .option('-x, --max', 'Find maximum value')
  .option('-w, --skewness', 'Calculate skewness')
  .option('-k, --kurtosis', 'Calculate kurtosis')
  .option('-a, --all', 'Show all statistics')
  .action(stats.handleStats);

// File System Commands
program
  .command('ls')
  .description('List directory contents')
  .option('-l, --long', 'Use long listing format')
  .action(fs.ls);

program
  .command('cd')
  .description('Change directory')
  .argument('[dir]', 'Target directory')
  .action(fs.cd);

program
  .command('mkdir')
  .description('Create a new directory')
  .argument('<dir>', 'Directory name')
  .action(fs.mkdir);

program
  .command('cp')
  .description('Copy source to destination')
  .argument('<source>', 'Source file or directory')
  .argument('<destination>', 'Destination path')
  .action(fs.cp);

program
  .command('mv')
  .description('Move source to destination')
  .argument('<source>', 'Source file or directory')
  .argument('<destination>', 'Destination path')
  .action(fs.mv);

program
  .command('rm')
  .description('Remove file or directory')
  .argument('<path>', 'Path to remove')
  .option('-f, --force', 'Force removal')
  .action(fs.rm);

program
  .command('cat')
  .description('Display file contents')
  .argument('<file>', 'File to display')
  .action(fs.cat);

program.parse(process.argv);
