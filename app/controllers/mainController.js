import Log from "../function/chalk.js";

import sequelize from '../databse.js';
import Championship from "../models/Championship.js";
import Wrestler from "../models/Wrestler.js";
import Wrestler_has_Championship from "../models/Wrestler_has_Championship.js";


const mainController = {
    home: async function (req, res) {
        try {
            const allChampionships = await Championship.findAll( {
                include: [{
                    model: Wrestler,
                    through: {
                        model: Wrestler_has_Championship
                    }
                }]
            });
            // const allWrestlers = await Wrestler.findAll({
            //     include: [{
            //         model: Championship,
            //         through: {
            //             model: Wrestler_has_Championship
            //         }
            //     }]
            // });
            // // Filtrer les champions avec au moins un championship
            // const wrestlersWithChampionships = allWrestlers.filter(wrestler => wrestler.Championships.length > 0);
            Log.wrestler('Données OK')
            res.render('home', {
                // wrestlers: wrestlersWithChampionships,
                championships: allChampionships,
            })
        } catch (error) {
            Log.error('Erreur affichage');
            console.log(error);
        };
    },
};


export default mainController;