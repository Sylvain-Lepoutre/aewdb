import Log from "../function/chalk.js";

import sequelize from '../databse.js';
import Championship from "../models/Championship.js";
import Wrestler from "../models/Wrestler.js";
import Wrestler_has_Championship from "../models/Wrestler_has_Championship.js";

import { findOnebySlug } from "../utils/findOneBySlug.js";

const apiController = {
    roster: async function (req, res) {
        try {
            const allWrestlers = await Wrestler.findAll({
                include: [{
                    model: Championship,
                    through: {
                        model: Wrestler_has_Championship
                    }
                }],
                order: [['name', 'ASC']]
            });
            Log.wrestler('Roster envoyé')
            res.json(allWrestlers)
        } catch (error) {
            console.error(error);
            Log.error(error.message);
            res.status(500).json({
                message: 'Le serveur a rencontré un problème.'
            });
        }
    },

    wrestlerRead: async function (req, res) {
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
                Log.wrestler('Wrestler envoyé')
                res.json(foundWrestler)
            }
            else {
                Log.error('Wrestler not found');
                res.status(404).json({
                    message: `Le catcheur demandé n'existe pas`
                })
            }
        } catch (error) {
            console.error(error);
            Log.error(error.message)
            res.status(500).json({
                message: 'Le serveur a rencontré un problème.',
            })
        }
    },

    wrestlerCreate: async function (req, res) {
        try {
            const wrestler = await Wrestler.findOne({
                where: {
                    name: req.body.name
                }
            });
            if (wrestler) {
                return res.status(409).json({
                    message: 'Le catcheur existe déjà'
                });
            }
            const newWrestler = await Wrestler.create(req.body);
            res.json({
                id: newWrestler.id,
                name: newWrestler.name,
                slug: newWrestler.slug
            });
        } catch (error) {
            console.error(error);
            Log.error(error.message)
            res.status(500).json({
                message: 'Le serveur a rencontré un problème.',
            })
        }
    },

    wrestlerDelete: async function (req, res) {
        try {
            const { slug } = req.params;
            const foundWrestler = await findOnebySlug(slug);
            // const foundWrestler = await Wrestler.findOne({ where: {slug: slug}});
            if (foundWrestler) {
                foundWrestler.destroy();
                Log.wrestler('Wrestler supprimé');
                res.json({
                    message: 'Le catcheur a été supprimé',
                });
            }
            else {
                res.status(404).json({
                    message: `Le catcheur n'existe pas`,
                })
            }
        } catch (error) {
            console.error(error);
            Log.error(error.message)
            res.status(500).json({
                message: 'Le serveur a rencontré un problème',
            })
        }
    },

    wrestlerUpdate: async function(req, res) {
        try {
            const { slug } = req.params;
            const foundWrestler = await findOnebySlug(slug);
            // const foundWrestler = await Wrestler.findOne({ where: {slug: slug}});
            if (foundWrestler) {
                await foundWrestler.update(req.body);
                Log.wrestler('Wrestler modifié');
                res.json({
                    id: foundWrestler.id,
                    name: foundWrestler.name,
                    slug: foundWrestler.slug,
                })
            } else {
                res.status(404).json({
                    message: `Le catcheur n'existe pas`
                })
            }
        } catch (error) {
            console.error(error);
            Log.error(error.message)
            res.status(500).json({
                message : 'Le serveur a rencontré un problème',
            })
        }
    }

};

export default apiController;