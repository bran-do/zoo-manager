/*
  A função `getEmployeeByName` recebe um nome como parâmetro e retorna uma pessoa colaboradora de nome ou sobrenome correspondente.
  Idealmente, por conta do formato da base de dados, o parâmetro deve ser uma string.
*/

const data = require('../data/zoo_data');

const { employees } = data;

const getEmployeeByName = (name) => {
  if (!name) { return {}; }

  return employees.find(({ firstName, lastName }) =>
    firstName === name || lastName === name);
};

module.exports = getEmployeeByName;
