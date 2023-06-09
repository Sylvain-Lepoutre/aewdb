import Wrestler from "../models/Wrestler.js";
import Championship from "../models/Championship.js";
import Wrestler_has_Championship from "../models/Wrestler_has_Championship.js";

export async function findAllWrestlers() {
    const allWrestlers = await Wrestler.findAll({
        include: [{
            model: Championship,
            through: {
                model: Wrestler_has_Championship,
                attributes: ['startDate', 'endDate']
            },
            attributes: ['title']
        }],
        attributes: ['id', 'name', 'slug'],
        order: [['name', 'ASC']]
    })
    return allWrestlers;
}

export async function findOneWrestlerBySlug(slug) {
    const foundWrestler = await Wrestler.findOne({
        include: [{
            model: Championship,
            through: {
                model: Wrestler_has_Championship,
                attributes: ['startDate', 'endDate']
            },
            attributes: ['title']
        }],
        attributes: ['id', 'name', 'slug'],
        where: { slug: slug }
    });
    return foundWrestler;
}

export async function findOneWrestlerByName(name) {
    const foundWrestler = await Wrestler.findOne({
        include: [{
            model: Championship,
            through: {
                model: Wrestler_has_Championship
            }
        }],
        where: { name: name }
    });
    return foundWrestler;
}