/*
  A função `getSpeciesByids` retorna todas as espécies do `zoo_data` que correspondem aos `id`s passados como parâmetro.
  O parâmetro ser tanto um único `id` como um array de `id`.
*/

const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (ids.length === 1) {
    return data.species.filter((species) => species.id === ids[0]);
  }

  return data.species.filter((species, index) => species.id === ids[index]);
};

module.exports = getSpeciesByIds;
