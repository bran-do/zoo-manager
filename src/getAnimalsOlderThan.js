/*
  A função `getAnimalsOlderThan` recebe o nome de uma espécie e uma idade por parâmetro.
  Ela retorna todos os animais dessa espécie na base de dados que possuam a idade informada ou sejam mais velhos.
*/

const data = require('../data/zoo_data');

const getAnimalsOlderThan = (speciesName, age) => {
  const foundSpecies = data.species.find((species) => species.name === speciesName);
  const { residents } = foundSpecies;
  return residents.every((resident) => resident.age >= age);
};

module.exports = getAnimalsOlderThan;
