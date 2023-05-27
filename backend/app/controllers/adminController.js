import Log from "../function/chalk.js";

import sequelize from '../database.js';
import Championship from "../models/Championship.js";
import Wrestler from "../models/Wrestler.js";
import Wrestler_has_Championship from "../models/Wrestler_has_Championship.js";

const adminController = {
    admin: async function (req, res) {
        try {
            const wrestlers = await Wrestler.findAll()
            res.render('admin', {
                headTitle: "Admin",
                wrestlers: wrestlers
            })
        } catch (error) {
            console.error(error);
            // Log.error(error.message);
            res.status(500).render('error', {
                headTitle: "Error 500",
                message: 'Le serveur a rencontre un problème'
            });
        }
    },


    wrestlerCreate: async function (req, res) {
        try {
            const { name } = req.body;
            const wrestler = await Wrestler.findOne({
                where: {
                    name: name
                }
            });
            if (wrestler) {
                // Log.wrestler('Le catcheur existe déjà')
                return res.status(409).render('error', {
                    headTitle: "Error 409",
                    message: 'Le catcheur existe déja'
                });
            }
            const newWrestler = await Wrestler.create(req.body);
            res.redirect('/roster/' + newWrestler.slug);
        } catch (error) {
            console.error(error);
            // Log.error(error.message);
            res.status(500).render('error', {
                headTitle: "Error 500",
                message: 'Erreur à la création du catcheur'
            });
        }
    },

    // Affiche la page d'update lors du choix d'un catcheur sur le menu select de la page admin
    wrestlerUpdate: async function (req, res) {
        try {
            const foundWrestlerId = req.body.wrestler;
            const wrestler = await Wrestler.findByPk(foundWrestlerId);
            if (wrestler) {
                res.render('adminWrestlerUpdate', {
                    headTitle: "Update " + wrestler.name,
                    wrestler: wrestler
                });
            } else {
                return res.status(404).render('error', {
                    headTitle: "Error 404",
                    message: "Le catcheur n'a pas été trouvé"
                });
            }
        } catch (error) {
            console.error(error);
            // Log.error(error.message);
            res.status(500).render('error', {
                headTitle: 'Error 500',
                message: 'Le serveur a rencontré un problème'
            });
        }
    },

    // Valide les modifications effectués sur la page update
    wrestlerEdit: async function (req, res) {
        try {
            const wrestlerId = req.body.id;
            const updatedWrestler = {
                name: req.body.name,
                slug: req.body.slug,
            };
            const [numRowsUpdated, [updatedWrestlerInstance]] = await Wrestler.update(updatedWrestler, {
                where: {
                    id: wrestlerId
                },
                returning: true
            });
            res.redirect('/roster/' + updatedWrestlerInstance.slug);
        } catch (error) {
            console.error(error);
            res.status(500).render('error', {
                headTitle: 'Error 500',
                message: 'Le serveur a rencontré un problème'
            });
        }
    },

    wrestlerDelete: async function (req, res) {
        try {
            const wrestlerId = req.body.id;
            const deletedWrestler = await Wrestler.destroy({
                where: {
                    id: wrestlerId,
                }
            });
            if (deletedWrestler > 0) {
                //TODO faire une vue de confirmation
                res.send('Le catcheur a été supprimé');
            } else {
                return res.status(404).render('error', {
                    headTitle: "Error 404",
                    message: "Le catcheur n'a pas été trouvé"
                });
            }
        } catch (error) {
            console.error(error);
            // Log.error(error.message);
            res.status(500).render('error', {
                headTitle: 'Error 500',
                message: 'Le serveur a rencontré un problème'
            });
        }
    }
};

export default adminController;