# Twitter updater 🐦
A small utility to periodically update your Twitter profile with dynamic data (currently still very limited, PRs welcome 🎉).

## Requirements
- Node.js and NPM installed
- [Twitter developer account](https://developer.twitter.com/)

## Installation
1. clone the repository
2. change the configuration section of the index.js
3. start the script with `node index.js` (or run it somewhere as a cron job or as a scheduled task on AWS/Azure/GCP)

## Configuration
Only the following placeholders can be used right now:
- `%ageInDays%` represents an integer value of the days sinc your birthday

## Notes
Currently this is extremely verbose (editing configurations inside the source code) and not really feature-rich. Pull requests are much appreciated, so feel free to submit one.
