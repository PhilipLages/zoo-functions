const data = require('../data/zoo_data');

const { species } = data;

const getSpeciesByLocation = () => species.reduce((acc, curr) => {
  acc[curr.location] = species.filter(({ location }) => location === curr.location)
    .map(({ name }) => name);
  return acc;
}, {});

const getNames = (specieName) => species.find(({ name }) => name === specieName).residents
  .map(({ name }) => name);

const getNamesBySex = (specieName, whichSex) => species.find(({ name }) => name === specieName)
  .residents.reduce((acc, curr) => {
    if (curr.sex === whichSex) {
      acc.push(curr.name);
    }
    return acc;
  }, []);

const exist = (options, string) => {
  const getOptionsKeys = Object.keys(options);
  const func = getOptionsKeys.includes(string);
  return func;
};

const getSpecies = (options) => species.reduce((acc, curr1) => {
  acc[curr1.location] = species.reduce((acc2, curr2) => {
    if (curr2.location === curr1.location && exist(options, 'sorted')) {
      acc2.push({ [curr2.name]: getNames(curr2.name).sort() });
    } else if (curr2.location === curr1.location) {
      acc2.push({ [curr2.name]: getNames(curr2.name) });
    }
    return acc2;
  }, []);
  return acc;
}, {});

const getSpeciesBySex = (options) => species.reduce((acc, curr1) => {
  acc[curr1.location] = species.reduce((acc2, curr2) => {
    if (curr2.location === curr1.location && exist(options, 'sorted')) {
      acc2.push({ [curr2.name]: getNamesBySex(curr2.name, options.sex).sort() });
    } else if (curr2.location === curr1.location) {
      acc2.push({ [curr2.name]: getNamesBySex(curr2.name, options.sex) });
    }
    return acc2;
  }, []);
  return acc;
}, {});

function getAnimalMap(options) {
  if (!options) return getSpeciesByLocation();
  if (!exist(options, 'includeNames')) return getSpeciesByLocation();
  if (exist(options, 'includeNames') && exist(options, 'sex')) return getSpeciesBySex(options);
  return getSpecies(options);
}

module.exports = getAnimalMap;
