import Wrestler from "../models/Wrestler.js";
import Championship from "../models/Championship.js";
import Wrestler_has_Championship from "../models/Wrestler_has_Championship.js";

export async function findAllChampionshipsHistory() {
    const allChampionshipsHistory = await Wrestler_has_Championship.findAll({
        include: [
            {
                model: Championship,
                attributes: ['id', 'title', 'slug']
            },
            {
                model: Wrestler,
                attributes: ['id', 'name', 'slug']
            }
        ],
        attributes: ['id', 'startDate', 'endDate']
    });
    return allChampionshipsHistory;
};

export async function findOneChampionshipHistoryBySlug(slug) {
    const foundChampionshipHistory = await Wrestler_has_Championship.findAll({
        include: [
            {
                model: Championship,
                where: {slug: slug },
                attributes: ['id', 'title', 'slug']
            },
            {
                model: Wrestler,
                attributes: ['id', 'name', 'slug']
            }
        ],
        attributes: ['id', 'startDate', 'endDate'],
    });
    return foundChampionshipHistory;
}