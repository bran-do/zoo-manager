/*
  A função `getEmployeeByName` recebe um nome como parâmetro e retorna uma pessoa colaboradora cujo nome ou sobrenome corresponde a esse nome.
  Por conta do formato da base de dados, o parâmetro idealmente deve ser uma string.
*/

const data = require('../data/zoo_data');

const getEmployeeByName = (name) => {
  if (!name) { return {}; }

  return data.employees.find((employee) =>
    employee.firstName === name
    || employee.lastName === name);
};

module.exports = getEmployeeByName;
