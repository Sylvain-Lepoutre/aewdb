import express from 'express';

import wrestlers from './roster.js';

const router = express.Router();

router.get('/', (req, res) => {
    let wrestlersChampions = [];
    for (const wrestler of wrestlers) {
        if (wrestler.championship) {
            wrestlersChampions.push(wrestler)
        }
    };
    res.render('home', {
        wrestler: wrestlersChampions
    }
    );
})

router.get('/roster', (req, res) => {
    res.render('home');
})

router.get('/roster', (req, res) => {
    res.render('test');
})


export default router;