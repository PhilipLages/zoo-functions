const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((accSpecies, currSpecies) => {
      accSpecies[currSpecies.name] = currSpecies.residents.length;
      return accSpecies;
    }, {});
  } if (!animal.sex) return species.find(({ name }) => animal.specie === name).residents.length;

  return species.find(({ name }) => animal.specie === name).residents.reduce((acc, curr) => {
    acc += (curr.sex === animal.sex) ? 1 : 0;
    return acc;
  }, 0);
}

module.exports = countAnimals;
