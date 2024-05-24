/*
  A função `getAnimalsOlderThan` recebe o nome de uma espécie e uma idade por parâmetro.
  Ela retorna todos os animais dessa espécie na base de dados que possuam a idade informada ou sejam mais velhos.
*/

const data = require('../data/zoo_data');

const { species } = data;

const getAnimalsOlderThan = (speciesName, speciesAge) => {
  const { residents } = species.find(({ name }) => name === speciesName);
  return residents.every(({ age }) => age >= speciesAge);
};

module.exports = getAnimalsOlderThan;
