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
stats-cli stats 1 2 3 4 5 --mean     # Calculate mean
stats-cli stats 1 2 3 4 5 --median   # Calculate median
stats-cli stats 1 2 2 3 4 --mode     # Find mode (most frequent value)
stats-cli stats 1 2 3 4 5 --stdev    # Calculate standard deviation

# Multiple operations
stats-cli stats 1 2 3 4 5 --mean --median
stats-cli stats 1 2 3 4 5 --stdev --variance

# Mode examples
stats-cli stats 1 2 3 4 5    --mode  # No mode (no repeated values)
stats-cli stats 1 2 2 3 3    --mode  # Multiple modes: 2, 3
stats-cli stats 1 2 2 2 3    --mode  # Single mode: 2

# All statistics at once
stats-cli stats 1 2 3 4 5 --all
```

## File System Operations

Basic file system operations:

- List directory contents:
  ```bash
  stats-cli ls [-l]
  ```

- Change directory:
  ```bash
  stats-cli cd [directory]
  ```

- Create directory:
  ```bash
  stats-cli mkdir <directory>
  ```

- Copy files/directories:
  ```bash
  stats-cli cp <source> <destination>
  ```

- Move/rename files/directories:
  ```bash
  stats-cli mv <source> <destination>
  ```

- Remove files/directories:
  ```bash
  stats-cli rm <path>
  ```

- Display file contents:
  ```bash
  stats-cli cat <file>
  ```

## Examples

```bash
# Statistical operations
stats-cli stats 1 2 3 4 5 --mean --median
stats-cli stats 1 2 2 3 4 5 5 --mode  # Will show 2 and 5 as modes
stats-cli stats 1 2 3 4 5 --stdev --variance
stats-cli stats 1 2 3 4 5 --skewness
stats-cli stats 1 2 3 4 5 --kurtosis
```

# File operations
stats-cli ls -l
stats-cli mkdir test
stats-cli cp source.txt dest.txt
```
