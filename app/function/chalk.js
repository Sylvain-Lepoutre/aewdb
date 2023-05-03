import chalk from "chalk";

const log = console.log;

const Log = {
    error: function (message) {
        log(chalk.bold.bgRed(message));
    },

    ok: function (message) {
        log(chalk.bold.bgGreen(message));
    },

    wrestler: function (message) {
        log(chalk.bold.bgBlue(message));
    },
    championship: function (message) {
        log(chalk.bold.bgYellowBright(message));
    },
};

export default Log;