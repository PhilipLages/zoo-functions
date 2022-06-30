const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  } if (!animal.sex) return species.find(({ name }) => animal.specie === name).residents.length;

  return species.find(({ name }) => animal.specie === name).residents
    .filter((resident) => resident.sex === animal.sex).length;
}

module.exports = countAnimals;
