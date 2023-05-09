import express from 'express';
import chalk from 'chalk';


import mainController from './controllers/mainController.js';
import rosterController from './controllers/rosterController.js';
import apiController from './controllers/apiController.js';
import adminController from './controllers/adminController.js';


const router = express.Router();

router.get('/', mainController.home);

router.get('/roster', rosterController.list);
router.get('/roster/:slug', rosterController.details);

router.get('/admin', adminController.admin);
router.post('/admin/wrestler/create', adminController.wrestlerCreate);
router.post('/admin/wrestler/update', adminController.wrestlerUpdate);
router.post('/admin/wrestler/edit', adminController.wrestlerEdit);


// Partie API
router.get('/api/roster', apiController.roster)
router.get('/api/roster/:slug', apiController.wrestlerRead)
router.post('/api/roster', apiController.wrestlerCreate)
router.delete('/api/roster/:slug', apiController.wrestlerDelete)
router.patch('/api/roster/:slug', apiController.wrestlerUpdate)



router.use(mainController.notFound);


export default router;