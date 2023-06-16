const data = require('../data/zoo_data');

const { employees, species } = data;

const getOldestFromFirstSpecies = (id) => {
  const speciesFound = employees.find((employee) => employee.id === id);
  const animalId = speciesFound.responsibleFor[0];
  const foundAnimal = species.find((animal) => animal.id === animalId);
  const agesArray = [];
  foundAnimal.residents.forEach((resident) => agesArray.push(resident.age));
  const oldestAge = Math.max(...agesArray);
  return Object.values(foundAnimal.residents.find((animal) => animal.age === oldestAge));
};

module.exports = getOldestFromFirstSpecies;
