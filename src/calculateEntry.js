const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const childAmount = entrants.filter((entrant) => entrant.age < 18);
  const adultAmount = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50);
  const seniorAmount = entrants.filter((entrant) => entrant.age >= 50);
  const countByAge = {
    child: childAmount.length,
    adult: adultAmount.length,
    senior: seniorAmount.length,
  };
  return countByAge;
};

const calculateEntry = (entrants) => {
  if (entrants === [] || entrants === undefined) {
    return 0;
  }
  const amountArray = [];
  amountArray.push(countEntrants(entrants).child * 20.99);
  amountArray.push(countEntrants(entrants).adult * 49.99);
  amountArray.push(countEntrants(entrants).senior * 24.99);

  const finalAmount = amountArray.reduce((acc, curr) => acc + curr);

  return finalAmount;
};

module.exports = { calculateEntry, countEntrants };
