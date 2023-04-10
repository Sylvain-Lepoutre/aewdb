import express from 'express';
import * as dotenv from 'dotenv';
import router from './app/router.js'

import wrestlers from './app/data/wrestlers.js';


dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./public'));

//TODO Gestion 404

app.use(router);

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}/`);
});