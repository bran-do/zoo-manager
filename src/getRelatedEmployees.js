/*
  A função `getRelatedEmployees` retorna o nome completo de todos os funcionários subordinados ao gerente de `id` passado como parâmetro.
  Caso a pessoa com esse `id` não seja gerente, a função lança um erro informando tal -- essa verificação é feita pela função `isManager`.
*/

const { employees } = require('../data/zoo_data');

const isManager = (id) => employees.some(({ managers }) => managers.includes(id));

const getRelatedEmployees = (id) => {
  if (!isManager(id)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const subordinates = employees.filter(({ managers }) => managers.includes(id));
  return subordinates.map(({ firstName, lastName }) => `${firstName} ${lastName}`);
};

module.exports = { isManager, getRelatedEmployees };
