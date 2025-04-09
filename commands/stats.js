const chalk = require('chalk');
const stdlib = require('@stdlib/stats');

function handleStats(numbersString, options) {
    try {
        // Join input in case it was split into multiple arguments
        if (Array.isArray(numbersString)) {
            numbersString = numbersString.join('');
        }

        // Preprocess input to ensure it's a valid JSON array
        if (!numbersString.startsWith('[') || !numbersString.endsWith(']')) {
            throw new Error('Input must be a valid array of numbers in the format [1, 2, 3, 4, 5]');
        }

        const data = JSON.parse(numbersString);

        if (!Array.isArray(data) || data.some(n => typeof n !== 'number')) {
            throw new Error('Input must be a valid array of numbers');
        }

        if (data.length < 2) {
            console.error(chalk.red('Error: At least 2 numbers are required for statistical calculations'));
            return;
        }

        const results = [];
        
        if (options.all || options.mean) results.push(['Mean', stdlib.base.mean(data.length, data, 1)]);
        if (options.all || options.median) {
            data.sort();
            results.push(['Median', stdlib.base.mediansorted(data.length, data, 1)]);
        }
        if (options.all || options.variance) {
            const dof = options.dof || 1; // Default degree of freedom is 1
            results.push(['Variance', stdlib.base.variance(data.length, dof, data, 1)]);
        }
        if (options.all || options.stdev) {
            const dof = options.dof || 1; // Default degree of freedom is 1
            results.push(['Standard Deviation', stdlib.base.stdev(data.length, dof, data, 1, )]);
        }
        if (options.all || options.min) results.push(['Minimum', stdlib.base.min(data.length, data, 1)]);
        if (options.all || options.max) results.push(['Maximum', stdlib.base.max(data.length, data, 1)]);
        if (options.all || options.max) results.push(['Range', stdlib.base.range(data.length, data, 1)]);

        if (results.length === 0) {
            console.log(chalk.yellow('No statistical operation selected. Use --help to see available options.'));
            return;
        }

        results.forEach(([label, value]) => {
            const formattedValue = Array.isArray(value) ? value.join(', ') : value.toFixed(4);
            console.log(chalk.blue(`${label}:`), chalk.green(formattedValue));
        });
    } catch (err) {
        console.error(chalk.red(`Error: ${err.message}`));
    }
}

module.exports = { handleStats };
