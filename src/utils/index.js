const data = require('../../data/zoo_data');

const { species, employees } = data;

const getEmployeeById = (employeeId) => employees.find(({ id }) => id === employeeId);

const getEmployeeByName = (name) => (name
  ? employees.find(({ firstName, lastName }) =>
    firstName === name || lastName === name)
  : {});

const getSpeciesNames = () => species.map(({ name }) => name);

const getSpeciesById = (speciesId) => species.find(({ id }) => id === speciesId);

const getSpeciesByName = (speciesName) => species.find(({ name }) => name === speciesName);

const getResidentsBySex = (residentList, genre) => residentList.filter(({ sex }) => sex === genre);

module.exports = {
  getEmployeeById,
  getEmployeeByName,
  getSpeciesNames,
  getSpeciesById,
  getSpeciesByName,
  getResidentsBySex,
};
