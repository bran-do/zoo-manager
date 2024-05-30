/*
  A função `getOldestFromFirstSpecies` busca o animal mais velho da primeira espécie pela qual uma pessoal colaboradora é responsável;
  - Como parâmetro, a função recebe o `id` desse funcionário;
  - Como retorno, a função devolve um array com nome, sexo e idade do animal mais velho da espécie.
    - Exemplo: [ 'Shu', 'female', 19 ]
*/

const data = require('../data/zoo_data');

const { employees, species } = data;

const getOldestFromFirstSpecies = (employeeId) => {
  // Encontrando a pessoa colaboradora e a primeira espécie pela qual ela é responsável:
  const employee = employees.find(({ id }) => id === employeeId);
  const speciesId = employee.responsibleFor[0];

  // Encontrando a lista de animais dessa espécie:
  const { residents } = species.find(({ id }) => id === speciesId);

  // Mapeando a idade de todos os animais dessa lista:
  const ages = residents.map(({ age }) => age);

  // Buscando as informações completas sobre o animal mais velho:
  const oldest = residents.find(({ age }) => age === Math.max(...ages));

  // Retornando um array com os valores de nome, sexo e idade do animal mais velho:
  return Object.values(oldest);
};

module.exports = getOldestFromFirstSpecies;
