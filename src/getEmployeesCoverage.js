/*
  A função `getEmployeesCoverage` retorna informações sobre um funcionário do zoológico e as espécies pelas quais ele é responsável.
  Como parâmetro, a função pode receber um objeto contendo um id ou um nome a ser pesquisado (ex: { name: 'Felipe' }, ou então { id: 10 }).
  O retorno é um objeto no seguinte formato:
    {
      id: string; id do funcionário,
      fullName: string; nome completo do funcionário,
      species: array de strings; espécies pelas quais o funcionário é responsável,
      locations: array de strings; as áreas onde ficam essas espécies (ex: ['SE', 'Sw'] ).
    }

  Caso chamada sem parâmetros, a função retorna uma lista de objetos iguais a esse, um para cada funcionário do zoológico.
*/

const { employees } = require('../data/zoo_data');
const {
  getEmployeeByName,
  getEmployeeById,
  getSpeciesById,
} = require('./utils');

const getEmployeeByNameOrId = (nameOrId) => {
  if ('name' in nameOrId) { return getEmployeeByName(nameOrId.name); }
  if ('id' in nameOrId) { return getEmployeeById(nameOrId.id); }
};

const getSpeciesLocation = (speciesId) => {
  const { location } = getSpeciesById(speciesId);
  return location;
};

const getSpeciesName = (speciesId) => {
  const { name } = getSpeciesById(speciesId);
  return name;
};

const singleEmployeeCoverage = (nameOrId) => {
  const employee = getEmployeeByNameOrId(nameOrId);
  if (!employee) { throw new Error('Informações inválidas'); }

  const { id, firstName, lastName, responsibleFor } = employee;
  const fullName = `${firstName} ${lastName}`;
  const speciesNames = responsibleFor.map((speciesId) => getSpeciesName(speciesId));
  const locations = responsibleFor.map((speciesId) => getSpeciesLocation(speciesId));

  return {
    id,
    fullName,
    species: speciesNames,
    locations,
  };
};

const getEmployeesCoverage = (nameOrId) => (nameOrId
  ? singleEmployeeCoverage(nameOrId)
  : employees.map((employee) => singleEmployeeCoverage(employee)));

module.exports = getEmployeesCoverage;
