/*
 A função `getSpeciesByids` retorna todas as espécies da base de dados que correspondam ao `id` ou `id`s passados como parâmetro.
*/

const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (ids.length === 1) {
    return data.species.filter((species) => species.id === ids[0]);
  }

  return data.species.filter((species, index) => species.id === ids[index]);
};

module.exports = getSpeciesByIds;
