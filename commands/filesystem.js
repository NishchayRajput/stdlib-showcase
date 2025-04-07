const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

function ls(options) {
    try {
        const files = fs.readdirSync(process.cwd());
        
        if (options.long) {
            files.forEach(file => {
                const stats = fs.statSync(file);
                console.log(
                    chalk.blue(`${stats.isDirectory() ? 'd' : '-'}${stats.mode.toString(8).substr(-3)} `),
                    chalk.green(`${stats.size}B `),
                    chalk.yellow(file)
                );
            });
        } else {
            console.log(files.join('  '));
        }
    } catch (err) {
        console.error(chalk.red(`Error: ${err.message}`));
    }
}

function cd(dir = process.env.HOME) {
    try {
        process.chdir(dir);
        console.log(chalk.green(`Current directory: ${process.cwd()}`));
    } catch (err) {
        console.error(chalk.red(`Error: ${err.message}`));
    }
}

function mkdir(dir) {
    try {
        fs.mkdirSync(dir);
        console.log(chalk.green(`Directory created: ${dir}`));
    } catch (err) {
        console.error(chalk.red(`Error: ${err.message}`));
    }
}

function cp(source, dest) {
    try {
        fs.copySync(source, dest);
        console.log(chalk.green(`Copied ${source} to ${dest}`));
    } catch (err) {
        console.error(chalk.red(`Error: ${err.message}`));
    }
}

function mv(source, dest) {
    try {
        fs.moveSync(source, dest);
        console.log(chalk.green(`Moved ${source} to ${dest}`));
    } catch (err) {
        console.error(chalk.red(`Error: ${err.message}`));
    }
}

function rm(path, options = {}) {
    try {
        fs.removeSync(path);
        console.log(chalk.green(`Removed ${path}`));
    } catch (err) {
        console.error(chalk.red(`Error: ${err.message}`));
    }
}

function cat(file) {
    try {
        const content = fs.readFileSync(file, 'utf8');
        console.log(content);
    } catch (err) {
        console.error(chalk.red(`Error: ${err.message}`));
    }
}

module.exports = { ls, cd, mkdir, cp, mv, rm, cat };
