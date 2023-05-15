import Log from "../function/chalk.js";


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
            // Log.wrestler('Données OK');
            res.render('home', {
                headTitle: "Accueil",
                championships: allChampionships,
            })
        } catch (error) {
            // Log.error('Erreur affichage');
            console.log(error);
        };
    },




    notFound: function(req, res) {
        res.status(404).render('error', {
            headTitle: "Erreur 404",
            message: `La page demandé n'a pas été trouvé`
        })
    }
};


export default mainController;