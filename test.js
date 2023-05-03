import Wrestler from './app/models/Wrestler.js';
import Championship from './app/models/Championship.js';
import Wrestler_has_Championship from './app/models/Wrestler_has_Championship.js';

const worldChampion = await Championship.findOne({
  where: { slug: 'aew-world-championship' },
  include: [{
    model: Wrestler,
    attributes: ['name'],
    through: {
      model: Wrestler_has_Championship,
      attributes: []
    }
  }]
});

console.log(`Current AEW World Champion: ${worldChampion.Wrestlers[0].name}`);
