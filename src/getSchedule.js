/*
  A função `getSchedule` é responsável por retornar o cronograma de visita baseado em uma espécie do zoológico ou em um dia da semana;
    - Se o parâmetro for uma espécie (ex: 'lions'), a função retorna os dias da semana em que essa espécie está disponível para exibição.
    - Se o parâmetro for um dia da semana (ex: 'Friday'), a função retorna as espécies disponíveis para exibição e o horário de funcionamento do zoológico nesse dia.
    - Se a função for chamada sem parâmetros, ela retorna todos os dias da semana e suas respectivas exibições e horários de funcionamento.

  As explicações das funções auxiliares estão abaixo.
*/

const { species, hours } = require('../data/zoo_data');
const { getSpeciesNames, getSpeciesByName } = require('./utils');

const weekdays = Object.keys(hours);

// Buscando os dias da semana em que uma determinada espécie estará em exibição:
const getSpeciesAvailability = (speciesName) => {
  const { availability } = getSpeciesByName(speciesName);
  return availability;
};

// Buscando o horário de funcionamento do zoológico em um determinado dia da semana:
const getOfficeHour = (weekday) => {
  const { open, close } = hours[weekday];
  return open
    ? `Open from ${open}am until ${close}pm`
    : 'CLOSED';
};

// Buscando as espécies em exibição em um determinado dia da semana:
const getExhibition = (weekday) => {
  const exhibition = species.filter(({ availability }) => availability.includes(weekday));
  return exhibition.length > 0
    ? exhibition.map(({ name }) => name)
    : 'The zoo will be closed!';
};

// Formatando as informações de um dia da semana com horário de funcionamento e exibições:
const getDailySchedule = (weekday) => {
  const officeHour = getOfficeHour(weekday);
  const exhibition = getExhibition(weekday);
  return { [`${weekday}`]: { officeHour, exhibition } };
};

// Formatando as informações de todos os dias da semana com horários de funcionamento e exibições:
const getWeeklySchedule = () => {
  let weeklySchedule = {};

  for (let i = 0; i < weekdays.length; i += 1) {
    const weekday = weekdays[i];
    const dailySchedule = getDailySchedule(weekday);
    weeklySchedule = { ...weeklySchedule, ...dailySchedule };
  }

  return weeklySchedule;
};

// Função principal:
const getSchedule = (scheduleTarget) => {
  const speciesNames = getSpeciesNames();

  if (speciesNames.includes(scheduleTarget)) {
    return getSpeciesAvailability(scheduleTarget);
  }

  if (weekdays.includes(scheduleTarget)) {
    return getDailySchedule(scheduleTarget);
  }

  return getWeeklySchedule();
};

module.exports = getSchedule;
