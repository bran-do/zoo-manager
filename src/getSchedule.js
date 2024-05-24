const data = require('../data/zoo_data');

const { species, hours } = data;
const weekdays = Object.keys(hours);

const getSpeciesAvailability = (speciesName) => {
  const { availability } = species.find((dataSpecies) => dataSpecies.name === speciesName);
  return availability;
};

const getOfficeHour = (weekday) => {
  const { open, close } = hours[weekday];
  return open
    ? `Open from ${open}am until ${close}pm`
    : 'CLOSED';
};

const getExhibition = (weekday) => {
  const exhibition = species.filter(({ availability }) => availability.includes(weekday));
  return exhibition.length > 0
    ? exhibition.map(({ name }) => name)
    : 'The zoo will be closed!';
};

const getDailySchedule = (weekday) => {
  const officeHour = getOfficeHour(weekday);
  const exhibition = getExhibition(weekday);
  return { [`${weekday}`]: { officeHour, exhibition } };
};

const getWeeklySchedule = () => {
  let weeklySchedule = {};

  for (let i = 0; i < weekdays.length; i += 1) {
    const weekday = weekdays[i];
    const dailySchedule = getDailySchedule(weekday);
    weeklySchedule = { ...weeklySchedule, ...dailySchedule };
  }

  return weeklySchedule;
};

const getSchedule = (scheduleTarget) => {
  const speciesNames = species.map(({ name }) => name);

  if (speciesNames.includes(scheduleTarget)) {
    return getSpeciesAvailability(scheduleTarget);
  }

  if (weekdays.includes(scheduleTarget)) {
    return getDailySchedule(scheduleTarget);
  }

  return getWeeklySchedule();
};

module.exports = getSchedule;
