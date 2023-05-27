import sequelize from "./app/database.js";
import Wrestler from "./app/models/Wrestler.js";
import Championship from "./app/models/Championship.js"
import Log from "./app/function/chalk.js";
import Wrestler_has_Championship from "./app/models/Wrestler_has_Championship.js";
import Match from "./app/models/Match.js";

// Création de la table Wrestler
try {
    await sequelize.drop();
    await sequelize.sync();
    Log.ok('Création de table OK')
} catch (error) {
    Log.error('erreur création de table');
};


//Création des wrestlers à partir du modele Wrestler
try {
    await Wrestler.create({ name: 'Chris Jericho' });
    await Wrestler.create({ name: 'MJF' });
    await Wrestler.create({ name: 'Jamie Hayter' });
    await Wrestler.create({ name: 'Jade Cargill' });
    await Wrestler.create({ name: 'Orange Cassidy' });
    await Wrestler.create({ name: 'Wardlow' });
    await Wrestler.create({ name: 'Cash Wheeler' });
    await Wrestler.create({ name: 'Dax Harwood' });
    await Wrestler.create({ name: 'Malakai Black' });
    await Wrestler.create({ name: 'Brody King' });
    await Wrestler.create({ name: 'Buddy Matthews' });
    await Wrestler.create({ name: 'Kenny Omega' });
    Log.wrestler('Seeding ok')
} catch (error) {
    Log.error('erreur dans le seeding')
};

//Création des championships à partir du modèle Championship
try {
    await Championship.create({
        title: 'AEW World Championship',
        maxHolder: 1,
    });
    await Championship.create({
        title: 'AEW Women\'s World Championship',
        maxHolder: 1,
    });
    await Championship.create({
        title: 'AEW TBS Championship',
        maxHolder: 1,
    });
    await Championship.create({
        title: 'AEW TNT Championship',
        maxHolder: 1,
    });
    await Championship.create({
        title: 'AEW International Championship',
        maxHolder: 1,
    });
    await Championship.create({
        title: 'AEW Tag Team Championship',
        maxHolder: 2,
    });
    await Championship.create({
        title: 'AEW Trios Championship',
        maxHolder: 3,
    });
    Log.championship('Seeding ok')
} catch (error) {
    Log.error('erreur dans le seeding')
};

//Création des objets à partir de Wrestler_has_Championship
try {
    //Je récupere les différents champions
    const aewWorldChampion = await Wrestler.findOne({ where: { slug: 'mjf' } });
    const aewWomensWorldChampion = await Wrestler.findOne({ where: { slug: 'jamie-hayter' } });
    const aewTbsChampion = await Wrestler.findOne({ where: { slug: 'jade-cargill' } });
    const aewTntChampion = await Wrestler.findOne({ where: { slug: 'wardlow' } });
    const aewInternationalChampion = await Wrestler.findOne({ where: { slug: 'orange-cassidy' } });
    const aewTagTeamChampion1 = await Wrestler.findOne({ where: { slug: 'cash-wheeler' } });
    const aewTagTeamChampion2 = await Wrestler.findOne({ where: { slug: 'dax-harwood' } });
    const aewTriosChampion1 = await Wrestler.findOne({ where: { slug: 'malakai-black' } });
    const aewTriosChampion2 = await Wrestler.findOne({ where: { slug: 'brody-king' } });
    const aewTriosChampion3 = await Wrestler.findOne({ where: { slug: 'buddy-matthews' } });
    console.log(aewWorldChampion, aewWomensWorldChampion, aewTbsChampion, aewTntChampion, aewInternationalChampion, aewTagTeamChampion1, aewTagTeamChampion2, aewTriosChampion1, aewTriosChampion2, aewTriosChampion3);
    //Je récupere les différents championships
    const aewWorldChampionship = await Championship.findOne({ where: { slug: 'aew-world-championship' } });
    const aewWomensWorldChampionship = await Championship.findOne({ where: { slug: 'aew-womens-world-championship' } });
    const aewTbsChampionship = await Championship.findOne({ where: { slug: 'aew-tbs-championship' } });
    const aewTntChampionship = await Championship.findOne({ where: { slug: 'aew-tnt-championship' } });
    const aewInternationalChampionship = await Championship.findOne({ where: { slug: 'aew-international-championship' } });
    const aewTagTeamChampionship = await Championship.findOne({ where: { slug: 'aew-tag-team-championship' } });
    const aewTriosChampionship = await Championship.findOne({ where: { slug: 'aew-trios-championship' } });
    console.log(aewWorldChampionship, aewWomensWorldChampionship, aewTbsChampionship, aewTntChampionship, aewInternationalChampionship, aewTagTeamChampionship, aewTriosChampionship);
    //Création des objets Wrestler_has_Championship
    await Wrestler_has_Championship.create({
        wrestlerId: aewWorldChampion.id,
        championshipId: aewWorldChampionship.id,
        startDate: new Date('2022-11-19'),
        endDate: null
    });
    await Wrestler_has_Championship.create({
        wrestlerId: aewWomensWorldChampion.id,
        championshipId: aewWomensWorldChampionship.id,
        startDate: new Date('2022-11-19'),
        endDate: null
    });
    await Wrestler_has_Championship.create({
        wrestlerId: aewTbsChampion.id,
        championshipId: aewTbsChampionship.id,
        startDate: new Date('2022-01-05'),
        endDate: null
    });
    await Wrestler_has_Championship.create({
        wrestlerId: aewTntChampion.id,
        championshipId: aewTntChampionship.id,
        startDate: new Date('2023-04-19'),
        endDate: null
    });
    await Wrestler_has_Championship.create({
        wrestlerId: aewInternationalChampion.id,
        championshipId: aewInternationalChampionship.id,
        startDate: new Date('2022-10-12'),
        endDate: null
    });
    await Wrestler_has_Championship.create({
        wrestlerId: aewTagTeamChampion1.id,
        championshipId: aewTagTeamChampionship.id,
        startDate: new Date('2022-04-05'),
        endDate: null
    });
    await Wrestler_has_Championship.create({
        wrestlerId: aewTagTeamChampion2.id,
        championshipId: aewTagTeamChampionship.id,
        startDate: new Date('2022-04-05'),
        endDate: null
    });
    await Wrestler_has_Championship.create({
        wrestlerId: aewTriosChampion1.id,
        championshipId: aewTriosChampionship.id,
        startDate: new Date('2022-03-05'),
        endDate: null
    });
    await Wrestler_has_Championship.create({
        wrestlerId: aewTriosChampion2.id,
        championshipId: aewTriosChampionship.id,
        startDate: new Date('2022-03-05'),
        endDate: null
    });
    await Wrestler_has_Championship.create({
        wrestlerId: aewTriosChampion3.id,
        championshipId: aewTriosChampionship.id,
        startDate: new Date('2022-05-03'),
        endDate: null
    });
    Log.ok('Wrestler_has_Championship OK')
} catch (error) {
    Log.error('erreur dans le seeding Wrestler Has Championship');
}

const matchData = {
    type: '3 vs 3',
    stipulation: 'Tag Team Match',
    duration: '20 minutes',
    winner: 'Team A',
    participants: [
        {
            teamName: 'Team A',
            wrestlers: [
                { wrestlerName: 'John Cena' },
                { wrestlerName: 'The Rock' },
                { wrestlerName: 'Stone Cold Steve Austin' },
            ],
        },
        {
            teamName: 'Team B',
            wrestlers: [
                { wrestlerName: 'Hulk Hogan' },
                { wrestlerName: 'Bret Hart' },
                { wrestlerName: 'Shawn Michaels' },
            ],
        },
    ],
};

Match.create(matchData)
    .then((match) => {
        console.log('Match créé avec succès:', match);
    })
    .catch((error) => {
        console.error('Erreur lors de la création du match:', error);
    });