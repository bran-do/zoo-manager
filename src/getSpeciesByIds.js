const data = require('../data/zoo_data');

const { species } = data;

const getSpeciesByIds = (...ids) => {
  if (ids.length === 1) {
    return species.filter((animal) => animal.id === ids[0]);
  }

  return species.filter((animal, index) => animal.id === ids[index]);
};

module.exports = getSpeciesByIds;
