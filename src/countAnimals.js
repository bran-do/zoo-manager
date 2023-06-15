const data = require('../data/zoo_data');

const names = data.species.map((species) => species.name);
const amountOfSpecies = data.species.map((species) => species.residents.length);

const allAnimalsCount = () => {
  const finalCount = {};
  for (let i = 0; i < names.length; i += 1) {
    finalCount[names[i]] = amountOfSpecies[i];
  }
  return finalCount;
};

const countAnimals = (animal) => {
  if (animal === undefined) {
    return allAnimalsCount();
  }
  const foundSpecies = data.species.find((species) => species.name === animal.species);
  if (Object.keys(animal).length === 1) {
    return foundSpecies.residents.length;
  }
  const foundSpeciesSex = foundSpecies.residents.filter((species) => species.sex === animal.sex);
  return foundSpeciesSex.length;
};

module.exports = countAnimals;
