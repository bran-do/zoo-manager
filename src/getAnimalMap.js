/*
  A função `getAnimalMap` devolve informações subdivididas entre as áreas (NE, NW, SE e SW) sobre as espécies de cada uma delas.
  Essa função recebe não-obrigatoriamente um objeto de opçẽs no formato:
    {
      includeNames: valor booleano; que permite incluir na lista o nome dos animais de cada espécie (residentes),
      sorted: valor booleano; que permite ordenar a lista de residentes alfabeticamente,
      sex: 'male' ou 'female'; que permite obter apenas os residentes de um determinado sexo.
    }
*/

const data = require('../data/zoo_data');

const { species } = data;
const locations = ['NE', 'NW', 'SE', 'SW'];

const getSpeciesInLocation = (zooLocation) => { // Retorno: ['lions', 'giraffes']
  const result = species.filter(({ location }) => location === zooLocation);
  return result.map(({ name }) => name);
};

const getSpeciesInAllLocations = () => { // Retorno: { NE: ['lions', 'giraffes'], NW: ['tigers', 'bears']}
  const result = {};

  locations.forEach((location) => {
    result[location] = getSpeciesInLocation(location);
  });

  return result;
};

const getResidentsNames = (residents) => residents.map(({ name }) => name);

const filterResidentsByGenre = (residents, genre) => residents.filter(({ sex }) => sex === genre);

const getResidents = (speciesName, sorted = false, genre = false) => { // Retorno: ['Dee', 'Faustino'];
  const { residents } = species.find(({ name }) => name === speciesName);
  let result;

  if (genre) {
    result = getResidentsNames(filterResidentsByGenre(residents, genre));
  } else {
    result = getResidentsNames(residents);
  }

  return sorted
    ? result.sort()
    : result;
};

const getResidentsInAllLocations = (sorted = false, genre = false) => { // Retorno: { NE: [ { lions: ['Dee', 'Faustino'] }, ... ], ... }
  const locationsSpecies = getSpeciesInAllLocations();
  const result = { NE: [], NW: [], SE: [], SW: [] };

  locations.forEach((location) => {
    const speciesThere = locationsSpecies[location];

    speciesThere.forEach((speciesName) => {
      const residents = getResidents(speciesName, sorted, genre);
      result[location] = [
        ...result[location], { [`${speciesName}`]: residents },
      ];
    });
  });

  return result;
};
const getAnimalMap = (options) => { // Options: { includeNames: _bool_, sorted: _bool_, sex: 'male' || 'female' }
  if (!options) { return getSpeciesInAllLocations(); }

  const { includeNames, sorted, sex } = options;
  return includeNames
    ? getResidentsInAllLocations(sorted, sex)
    : getSpeciesInAllLocations();
};

module.exports = getAnimalMap;
