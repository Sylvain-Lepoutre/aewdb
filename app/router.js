import express from 'express';
import chalk from 'chalk';

import mainController from './controllers/mainController.js';
import { log, error, test } from './function/chalk.js';

import wrestlers from './data/wrestlers.js';
import championships from './data/championship.js';

for (const championship of championships) {
    log(test(championship.name, championship.slug));
}

for (const wrestler of wrestlers) {
    console.log(wrestler.name, wrestler.slug, wrestler.championship);  
};


const router = express.Router();

router.get('/', mainController.home);


export default router;