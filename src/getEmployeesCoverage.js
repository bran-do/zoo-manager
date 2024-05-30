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

const data = require('../data/zoo_data');

const { employees, species } = data;

function getEmployeeByName(employeeName) {
  return employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName);
}
const getEmployeeById = (employeeId) => employees.find(({ id }) => id === employeeId);

const getEmployeeByNameOrId = (nameOrId) => {
  if ('name' in nameOrId) { return getEmployeeByName(nameOrId.name); }
  if ('id' in nameOrId) { return getEmployeeById(nameOrId.id); }
};

const getSpeciesLocation = (speciesId) => {
  const { location } = species.find(({ id }) => id === speciesId);
  return location;
};

const getSpeciesName = (speciesId) => {
  const { name } = species.find(({ id }) => id === speciesId);
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

const getEmployeesCoverage = (nameOrId) => {
  if (nameOrId) { return singleEmployeeCoverage(nameOrId); }
  return employees.map((employee) => singleEmployeeCoverage(employee));
};

module.exports = getEmployeesCoverage;
