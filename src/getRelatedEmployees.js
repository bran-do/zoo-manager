/*
  A função `getRelatedEmployees` retorna o nome completo de todos os funcionários subordinados ao gerente de `id` passado como parâmetro.
  Caso a pessoa com esse `id` não seja gerente, a função lança um erro informando tal -- essa verificação é feita pela função `isManager`.
*/

const data = require('../data/zoo_data');

const { employees } = data;

const isManager = (id) => employees.some((employee) => employee.managers.includes(id));

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  const subordinates = employees.filter((employee) => employee.managers.includes(managerId));
  return subordinates.map((subordinate) => `${subordinate.firstName} ${subordinate.lastName}`);
};

module.exports = { isManager, getRelatedEmployees };
