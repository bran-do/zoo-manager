const data = require('../../data/zoo_data');

const { employees } = data;

const getEmployeeByName = (name) => (name
  ? employees.find(({ firstName, lastName }) =>
    firstName === name || lastName === name)
  : {});

module.exports = {
  getEmployeeByName,
};
