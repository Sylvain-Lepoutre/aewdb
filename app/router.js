import express from 'express';
import chalk from 'chalk';


import mainController from './controllers/mainController.js';



const router = express.Router();

router.get('/', mainController.home);



export default router;