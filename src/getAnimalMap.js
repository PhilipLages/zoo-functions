const data = require('../data/zoo_data');

const { species } = data;

const getSpeciesByLocation = () => species.reduce((acc, curr) => {
  acc[curr.location] = species.filter(({ location }) => location === curr.location)
    .map(({ name }) => name);
  return acc;
}, {});

const getNames = (specieName) => species.find(({ name }) => name === specieName).residents
  .map(({ name }) => name);

const getSpeciesNames = () => species.reduce((acc, curr1) => {
  acc[curr1.location] = species.reduce((acc2, curr2) => {
    if (curr2.location === curr1.location) {
      acc2.push({ [curr2.name]: getNames(curr2.name) });
    }
    return acc2;
  }, []);
  return acc;
}, {});

function getAnimalMap(options) {
  if (!options) return getSpeciesByLocation();
  const objOptions = Object.keys(options);
  const includes = (string) => objOptions.includes(string);
  if (includes('sex') || includes('sorted')) return getSpeciesByLocation();
  if (includes('includeNames')) return getSpeciesNames();
}

// console.log(Object.keys({ sex: 'female', sorted: true }));

module.exports = getAnimalMap;
