const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const foundSpecies = data.species.find((species) => species.name === animal);
  const { residents } = foundSpecies;
  return residents.every((resident) => resident.age >= age);
};

module.exports = getAnimalsOlderThan;
