/*
  A função `getAnimalMap` devolve informações subdivididas entre as áreas (NE, NW, SE e SW) sobre as espécies de cada uma delas.
  Essa função recebe não-obrigatoriamente um objeto de opçẽs no formato:
    {
      includeNames: valor booleano; que permite incluir na lista o nome dos animais de cada espécie (residentes),
      sorted: valor booleano; que permite ordenar a lista de residentes alfabeticamente,
      sex: 'male' ou 'female'; que permite obter apenas os residentes de um determinado sexo.
    }

  Caso a função não receba nenhum parâmetro, ela retorna o nome das espécies disponíveis em cada área.
*/

const {
  getSpeciesByName,
  getSpeciesByLocation,
  getResidentsNames,
  filterResidentsBySex,
} = require('./utils');

const locations = ['NE', 'NW', 'SE', 'SW'];

const getSpeciesInAllLocations = () => { // Retorno: { NE: ['lions', 'giraffes'], NW: ['tigers', 'bears']}
  const result = {};

  locations.forEach((location) => {
    result[location] = getSpeciesByLocation(location);
  });

  return result;
};

const getResidents = (species, sorted = false, genre = false) => { // Retorno: ['Dee', 'Faustino'];
  const { residents } = getSpeciesByName(species);
  let result;

  if (genre) {
    result = getResidentsNames(filterResidentsBySex(residents, genre));
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

    speciesThere.forEach((species) => {
      const residents = getResidents(species, sorted, genre);
      result[location] = [
        ...result[location], { [`${species}`]: residents },
      ];
    });
  });

  return result;
};

const getAnimalMap = ({ includeNames, sorted, sex } = {}) => // Options: { includeNames: _bool_, sorted: _bool_, sex: 'male' || 'female' }
  (includeNames
    ? getResidentsInAllLocations(sorted, sex)
    : getSpeciesInAllLocations());

module.exports = getAnimalMap;
