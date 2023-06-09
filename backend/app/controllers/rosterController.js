import Log from "../function/chalk.js";

import sequelize from '../database.js';
import Championship from "../models/Championship.js";
import Wrestler from "../models/Wrestler.js";
import Wrestler_has_Championship from "../models/Wrestler_has_Championship.js";



const rosterController = {
    list: async function (req, res) {
        try {
            const allWrestlers = await Wrestler.findAll({
                order: [["name", 'ASC']],
                include: [{
                    model: Championship,
                    through: {
                        model: Wrestler_has_Championship
                    }
                }],
            });
            // Log.wrestler('Données OK');
            res.render('roster', {
                headTitle: "Roster",
                wrestlers: allWrestlers
            });
        } catch (error) {
            console.error(error);
            // Log.error(error.message);
            res.status(500).render('error',{
                headTitle: "Error 500",
                message: 'Le serveur a rencontré un problème'
            });
        }
    },

    details: async function (req, res) {
        try {
            const { slug } = req.params;
            const foundWrestler = await Wrestler.findOne({
                include: [{
                    model: Championship,
                    through: {
                        model: Wrestler_has_Championship
                    }
                }],
                where: { slug: slug }
            });
            if (foundWrestler) {
                // console.log(foundWrestler);
                // Log.wrestler('Wrestler envoyé');
                res.render('wrestlerDetails', {
                    headTitle: foundWrestler.name,
                    wrestler: foundWrestler
                })
            } else {
                // Log.error(`Wrestler not found`);
                res.status(404).render('error', {
                    message: `Le catcheur demandé n'existe pas`
                })
            }
        } catch (error) {
            console.error(error);
            // Log.error(error.message)
            res.status(500).render('error', {
                headTitle: "Error 500",
                message: 'Le serveur a rencontré un problème'
            })
        }
    }
};

export default rosterController;