/*
  A função `countAnimals` recebe uma espécie como parâmetro um e retorna a contagem de animais dessa espécie na base de dados.
  - Opcionalmente, é possível especificar um sexo ('male' ou 'female') para a contagem;
  - Caso a função seja chamada sem parâmetros, ela retornará uma lista de todas espécies e suas respectivas contagens de animais.
    - Essa contagem total é feita através da função `countAllAnimals`.

  Exemplos de parâmetros: { species: 'lion', sex: 'female' }; { species: 'penguin' };
*/

const data = require('../data/zoo_data');
const { getSpeciesByName, filterResidentsBySex } = require('./utils');

const countAllAnimals = () => {
  let finalCount;
  data.species.forEach(({ name, residents }) => {
    finalCount = { ...finalCount, [`${name}`]: residents.length };
  });
  return finalCount;
};

const countAnimals = ({ species, sex = undefined } = {}) => {
  if (!species) { return countAllAnimals(); }

  const { residents } = getSpeciesByName(species);

  if (!sex) { return residents.length; }

  const { length } = filterResidentsBySex(residents, sex);
  return length;
};

module.exports = countAnimals;
