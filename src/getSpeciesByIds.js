const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (ids.length === 1) {
    return data.species.filter((animal) => animal.id === ids[0]);
  }
  return data.species.filter((animal, index) => animal.id === ids[index]);
};

module.exports = getSpeciesByIds;
