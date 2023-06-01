import express from 'express';
import * as dotenv from 'dotenv';
import router from './app/router.js';
import cors from 'cors';
import sequelize from './app/database.js';


dotenv.config();

const port = process.env.PORT || 3000;

const app = express();


// Autorise les requètes venant du localhost
app.use(cors({
    origin: 'http://localhost:1234'
}));

// Gestion des views
app.set('view engine', 'ejs');
app.set('views', './app/views');

// Gestion des requètes en POST, afin de recevoir l'url en un objet manipulable aisément
app.use(express.urlencoded({ extended: true }));

// Permet la gestion des réponses en format json
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