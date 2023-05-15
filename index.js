import express from 'express';
import * as dotenv from 'dotenv';
import router from './app/router.js'

import sequelize from './app/database.js';



dotenv.config();

const port = process.env.PORT || 3000;

const app = express();


// Gestion des views
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Gestion des assets static
app.use(express.static('./public'));


app.use(router);

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}/`);
});