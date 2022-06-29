const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(ids) {
  const findSpecie = employees.find(({ id }) => id === ids).responsibleFor.find((specie) => specie);
  const idResidents = species.find(({ id }) => id === findSpecie).residents;
  const specieAges = idResidents.map(({ age }) => age);
  const oldestAgeNumber = Math.max(...specieAges);
  const oldestAnimal = idResidents.find(({ age }) => age === oldestAgeNumber);
  return Object.values(oldestAnimal);
}

module.exports = getOldestFromFirstSpecies;
