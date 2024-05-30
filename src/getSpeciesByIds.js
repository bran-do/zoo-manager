/*
 A função `getSpeciesByids` retorna todas as espécies da base de dados que correspondam ao `id` ou `id`s passados como parâmetro.
*/

const { species } = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => (ids.length === 1
  ? species.filter(({ id }) => id === ids[0])
  : species.filter(({ id }, index) => id === ids[index]));

module.exports = getSpeciesByIds;
