/*
  A função `calculateEntry` é responsável por calcular o valor total dos ingressos ao zoológico considerando a faixa etária do visitante.
  Ela recebe como parâmetro um array de objetos { name: _string_, age: _number_ };
  - O valor dos ingressos aqui está definido como:
    - 20.99 para crianças;
    - 49.99 para adultos;
    - 24.99 para idosos.
*/

const countEntrants = (entrants) => {
  const child = entrants.filter((entrant) => entrant.age < 18).length;
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const senior = entrants.filter((entrant) => entrant.age >= 50).length;

  return { child, adult, senior };
};

const calculateEntry = (entrants) => {
  if (!entrants) { return 0; }

  const { child, adult, senior } = countEntrants(entrants);
  const expenses = [
    child * 20.99,
    adult * 49.99,
    senior * 24.99,
  ];

  return expenses.reduce((acc, curr) => acc + curr);
};

module.exports = { calculateEntry, countEntrants };
