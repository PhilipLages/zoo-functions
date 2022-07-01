const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const child = entrants.filter((entrant) => entrant.age < 18).length;
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const senior = entrants.filter((entrant) => entrant.age >= 50).length;
  const obj = { child, adult, senior };
  return obj;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const priceC = countEntrants(entrants).child * prices.child;
  const priceA = countEntrants(entrants).adult * prices.adult;
  const priceS = countEntrants(entrants).senior * prices.senior;
  return priceC + priceA + priceS;
}

module.exports = { calculateEntry, countEntrants };
