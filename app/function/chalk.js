import chalk from "chalk";

const log = console.log;

const error = chalk.bold.bgRed;
const test = chalk.bold.bgGreen;

export { log, error, test };