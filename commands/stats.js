const chalk = require('chalk');
const stdlib = require('@stdlib/stats');

function handleStats(numbers, options) {
    // Convert input to standard array of numbers
    console.log(numbers)
    console.log(options)
    console.log(typeof(numbers));
    console.log(typeof(options));
    const data = numbers.map(n => parseFloat(n));
    // console.log(data)
    
    if (data.some(isNaN)) {
        console.error(chalk.red('Error: All inputs must be valid numbers'));
        return;
    }

    if (data.length < 2) {
        console.error(chalk.red('Error: At least 2 numbers are required for statistical calculations'));
        return;
    }

    const results = [];
    
    try {
        if (options.all || options.mean) results.push(['Mean', stdlib.base.mean(data.length, data, 1)]);
        if (options.all || options.median) {
            // sorting the data array to find the median
            data.sort();
            console.log(data);
            results.push(['Median', stdlib.base.mediansorted(data.length, data, 1)]);
        }
        if (options.all || options.variance) results.push(['Variance', stdlib.base.variance(data.length, data, 1)]);
        if (options.all || options.stdev) results.push(['Standard Deviation', stdlib.base.stdev(data)]);
        if (options.all || options.min) results.push(['Minimum', stdlib.base.min(data.length, data, 1)]);
        if (options.all || options.max) results.push(['Maximum', stdlib.base.max(data.length, data, 1)]);

        if (results.length === 0) {
            console.log(chalk.yellow('No statistical operation selected. Use --help to see available options.'));
            return;
        }

        results.forEach(([label, value]) => {
            const formattedValue = Array.isArray(value) ? value.join(', ') : value.toFixed(4);
            console.log(chalk.blue(`${label}:`), chalk.green(formattedValue));
        });
    } catch (err) {
        console.error(chalk.red(`Error calculating statistics: ${err.message}`));
    }
}

module.exports = { handleStats };
