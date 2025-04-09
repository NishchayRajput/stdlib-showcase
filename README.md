# Stats CLI Tool

A command-line interface tool for statistical operations and file management.

## Installation

```bash
npm install
npm link
```

## Statistical Operations

Calculate various statistical measures for a series of numbers. At least 2 numbers are required for calculations.

```bash
stats-cli stats <numbers...> [options]
```

Options:
- `-m, --mean` - Calculate mean
- `-d, --median` - Calculate median
- `-o, --mode` - Calculate mode
- `-s, --stdev` - Calculate standard deviation
- `-v, --variance` - Calculate variance
- `-n, --min` - Find minimum value
- `-x, --max` - Find maximum value
- `-w, --skewness` - Calculate skewness
- `-k, --kurtosis` - Calculate kurtosis
- `-a, --all` - Show all statistics

Examples:
```bash
# Basic statistics
stats-cli stats [1, 2, 3,3 4, 5] --mean     # Calculate mean
stats-cli stats [1, 2, 3,3 4, 5] --median   # Calculate median
stats-cli stats [1, 2, 3,3 4, 5] --mode     # Find mode (most frequent value)
stats-cli stats [1, 2, 3,3 4, 5] --stdev    # Calculate standard deviation
stats-cli stats [1, 2, 3,3 4, 5] --stdev --dof=5    # defaul degree of freedom is 1

# Multiple operations
stats-cli stats [1, 2, 3,3 4, 5] --mean --median
stats-cli stats [1, 2, 3,3 4, 5] --stdev --variance # defaul degree of freedom is 1
stats-cli stats [1, 2, 3,3 4, 5] --stdev --variance --dof=2

# Mode examples
stats-cli stats [1, 2, 3,3 4, 5]    --mode  # No mode (no repeated values)
stats-cli stats [1, 2, 2, 3, 3]    --mode  # Multiple modes: 2, 3
stats-cli stats [1, 2, 2, 2, 3]    --mode  # Single mode: 2

# All statistics at once
stats-cli stats [1, 2, 3, 4, 5] --all
```


