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
  return undefined;
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
