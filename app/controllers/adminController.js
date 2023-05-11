import Log from "../function/chalk.js";

import sequelize from '../databse.js';
import Championship from "../models/Championship.js";
import Wrestler from "../models/Wrestler.js";
import Wrestler_has_Championship from "../models/Wrestler_has_Championship.js";

const adminController = {
    admin: async function (req, res) {
        try {
            const wrestlers = await Wrestler.findAll()
            res.render('admin', {
                wrestlers: wrestlers
            })
        } catch (error) {
            console.error(error);
            Log.error(error.message);
            res.render('error', {
                message: 'Le serveur a rencontre un problème'
            });
        }

    },


    wrestlerCreate: async function (req, res) {
        try {
            const { name } = req.body;
            console.log(name);
            const wrestler = await Wrestler.findOne({
                where: {
                    name: name
                }
            });
            if (wrestler) {
                Log.wrestler('Le catcheur existe déjà')
                return res.status(409).render('error', {
                    message: 'Le catcheur existe déja'
                });
            }
            const newWrestler = await Wrestler.create(req.body);
            res.redirect('/roster/' + newWrestler.slug);
        } catch (error) {
            console.error(error);
            Log.error(error.message);
            res.render('error', {
                message: 'Erreur à la création du catcheur'
            });
        }
    },

    wrestlerUpdate: async function (req, res) {
        try {
            const foundWrestlerId = req.body.wrestler;
            const wrestler = await Wrestler.findByPk(foundWrestlerId);
            if (wrestler) {
                res.render('adminWrestlerUpdate', {
                    wrestler: wrestler
                });
            } else {
                return res.render('error', {
                    message: "Le catcheur n'a pas été trouvé"
                });
            }
        } catch (error) {
            console.error(error);
            Log.error(error.message);
            res.render('error', {
                message: 'Le serveur a rencontré un problème'
            });
        }
    },

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
            res.render('error', {
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
                res.send('Le catcheur a été supprimé');
            } else {
                return res.render('error', {
                    message: "Le catcheur n'a pas été trouvé"
                });
            }
        } catch (error) {
            console.error(error);
            Log.error(error.message);
            res.render('error', {
                message: 'Le serveur a rencontré un problème'
            });
        }
    }
};

export default adminController;