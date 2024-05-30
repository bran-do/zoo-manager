const data = require('../../data/zoo_data');

const { species, employees } = data;

const getEmployeeById = (employeeId) => employees.find(({ id }) => id === employeeId);

const getEmployeeByName = (name) => (name
  ? employees.find(({ firstName, lastName }) =>
    firstName === name || lastName === name)
  : {});

const getSpeciesNames = () => species.map(({ name }) => name);

const getSpeciesById = (speciesId) => species.find(({ id }) => id === speciesId);

const getSpeciesByIds = (...ids) => (ids.length === 1
  ? species.filter(({ id }) => id === ids[0])
  : species.filter(({ id }, index) => id === ids[index]));

const getSpeciesByName = (speciesName) => species.find(({ name }) => name === speciesName);

const getSpeciesByLocation = (zooLocation) => { // Retorno: ['lions', 'giraffes']
  const result = species.filter(({ location }) => location === zooLocation);
  return result.map(({ name }) => name);
};

const getResidentsNames = (residentList) => residentList.map(({ name }) => name);

const filterResidentsBySex = (residents, genre) => residents.filter(({ sex }) => sex === genre);

module.exports = {
  getEmployeeById,
  getEmployeeByName,
  getSpeciesNames,
  getSpeciesById,
  getSpeciesByIds,
  getSpeciesByName,
  getSpeciesByLocation,
  getResidentsNames,
  filterResidentsBySex,
};
