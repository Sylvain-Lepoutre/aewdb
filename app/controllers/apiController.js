import Log from "../function/chalk.js";

import sequelize from '../database.js';
import Championship from "../models/Championship.js";
import Wrestler from "../models/Wrestler.js";
import Wrestler_has_Championship from "../models/Wrestler_has_Championship.js";

import { findAllWrestlers, findOneWrestlerBySlug, findOneWrestlerByName } from "../utils/requestWrestlers.js";
import { findAllChampionships, findOneChampionshipBySlug } from "../utils/requestChampionship.js";
import { findAllChampionshipsHistory, findOneChampionshipHistoryBySlug } from "../utils/requestWrestler_has_Championships.js";

const apiController = {

    // Partie consacrée au "wrestlers"

    roster: async function (req, res) {
        try {
            const allWrestlers = await findAllWrestlers();
            // Log.wrestler('Roster envoyé')
            res.json(allWrestlers)
        } catch (error) {
            // console.error(error);
            // Log.error(error.message);
            res.status(500).json({
                message: 'Le serveur a rencontré un problème.'
            });
        }
    },

    wrestlerRead: async function (req, res) {
        try {
            const { slug } = req.params;
            const foundWrestler = await findOneWrestlerBySlug(slug);
            if (foundWrestler) {
                // Log.wrestler('Wrestler envoyé')
                res.json(foundWrestler)
            }
            else {
                // Log.error('Wrestler not found');
                res.status(404).json({
                    message: `Le catcheur demandé n'existe pas.`
                })
            }
        } catch (error) {
            // console.error(error);
            // Log.error(error.message)
            res.status(500).json({
                message: 'Le serveur a rencontré un problème.',
            })
        }
    },

    wrestlerCreate: async function (req, res) {
        try {
            const { name } = req.body;
            const foundWrestler = await findOneWrestlerByName(name);
            if (foundWrestler) {
                return res.status(409).json({
                    message: 'Le catcheur existe déjà.'
                });
            } else {
                const newWrestler = await Wrestler.create(req.body);
                res.json({
                    id: newWrestler.id,
                    name: newWrestler.name,
                    slug: newWrestler.slug
                });
            }
        } catch (error) {
            // console.error(error);
            // Log.error(error.message)
            res.status(500).json({
                message: 'Le serveur a rencontré un problème.',
            })
        }
    },

    wrestlerDelete: async function (req, res) {
        try {
            const { slug } = req.params;
            const foundWrestler = await findOneWrestlerBySlug(slug);
            if (foundWrestler) {
                foundWrestler.destroy();
                // Log.wrestler('Wrestler supprimé');
                res.json({
                    message: 'Le catcheur a été supprimé.',
                });
            }
            else {
                res.status(404).json({
                    message: `Le catcheur n'existe pas.`
                })
            }
        } catch (error) {
            // console.error(error);
            // Log.error(error.message)
            res.status(500).json({
                message: 'Le serveur a rencontré un problème'
            })
        }
    },

    wrestlerUpdate: async function (req, res) {
        try {
            const { slug } = req.params;
            const foundWrestler = await findOneWrestlerBySlug(slug);
            if (foundWrestler) {
                await foundWrestler.update(req.body);
                // Log.wrestler('Wrestler modifié');
                res.json({
                    id: foundWrestler.id,
                    name: foundWrestler.name,
                    slug: foundWrestler.slug,
                })
            } else {
                res.status(404).json({
                    message: `Le catcheur n'existe pas.`
                })
            }
        } catch (error) {
            // console.error(error);
            // Log.error(error.message)
            res.status(500).json({
                message: 'Le serveur a rencontré un problème'
            })
        }
    },

    // Partie consacrée au "championships"

    championships: async function (req, res) {
        try {
            const allChampionships = await findAllChampionships();
            // Log.championship('Championships envoyées');
            res.json(allChampionships);
        } catch (error) {
            // Log.error(error.message);
            res.status(500).json({
                message: 'Le serveur a rencontré un problème.'
            });
        }
    },

    championshipRead:  async function (req, res) {
        try {
            const { slug } = req.params;
            const foundChampionship = await findOneChampionshipBySlug(slug);
            if (foundChampionship) {
                // Log.championship('Championship envoyé')
                res.json(foundChampionship)
            } else {
                // Log.error('Championship not found')
                res.status(404).json({
                    message: `Le championnat demandé n'existe pas.`
                })
            }
        } catch (error) {
            // console.error(error);
            // Log.error(error.message)
            res.status(500).json({
                message: 'Le serveur a rencontré un problème.'
            })
        }
    },

    // Partie consacrée à la table "Wrestler_has_Championship"
    championshipsHistory: async function (req, res) {
        try {
            const allChampionshipsHistory = await findAllChampionshipsHistory();
            // Log.wrestler_has_championship('Données Ok')
            res.json(allChampionshipsHistory)
        } catch (error) {
            // console.error(error);
            // Log.error(error.message);
            res.status(500).json({
                message: 'Le serveur a rencontré un problème.'
            })
        }
    },

    championshipHistoryRead: async function (req, res) {
        try {
            const { slug } = req.params;
            const foundChampionshipHistory = await findOneChampionshipHistoryBySlug(slug);
            if (foundChampionshipHistory && foundChampionshipHistory.length > 0) {
                // Log.wrestler_has_championship('History ok');
                res.json(foundChampionshipHistory)
            } else {
                // Log.error('History not found')
                res.status(404).json({
                    message: `L'historique demandé n'existe pas.`
                })
            }
        } catch (error) {
            // console.error(error);
            // Log.error(error.message)
            res.status(500).json({
                message: 'Le serveur a rencontré un problème.'
            })
        }
    }


};


export default apiController;