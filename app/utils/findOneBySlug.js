import Wrestler from "../models/Wrestler.js";


export async function findOnebySlug(slug) {
    const result = await Wrestler.findOne({ where: { slug: slug }});
    return result;
} 
