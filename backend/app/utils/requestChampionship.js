import Wrestler from "../models/Wrestler.js";
import Championship from "../models/Championship.js";
import Wrestler_has_Championship from "../models/Wrestler_has_Championship.js";


export async function findAllChampionships() {
    const allChampionships = await Championship.findAll({
        include: [{
            model: Wrestler,
            through: {
                model: Wrestler_has_Championship,
                attributes: ['startDate', 'endDate']
            },
            attributes: ['id', 'name']
        }
        ],
        attributes: ['id', 'title', 'slug']
    });
    return allChampionships;
}

export async function findOneChampionshipBySlug(slug) {
    const foundChampionship = await Championship.findOne({
        include: [{
            model: Wrestler,
            through: {
                model: Wrestler_has_Championship,
                attributes: ['startDate', 'endDate']
            },
            attributes: ['id', 'name']
        }
        ],
        attributes: ['id', 'title', 'slug'],
        where: { slug: slug }
    });
    return foundChampionship;
}
