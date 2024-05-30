const data = require('../../data/zoo_data');

const { species, employees } = data;

const getEmployeeByName = (name) => (name
  ? employees.find(({ firstName, lastName }) =>
    firstName === name || lastName === name)
  : {});

const getSpeciesByName = (speciesName) => species.find(({ name }) => name === speciesName);

const getResidentsBySex = (residentList, genre) => residentList.filter(({ sex }) => sex === genre);

module.exports = {
  getEmployeeByName,
  getSpeciesByName,
  getResidentsBySex,
};
