const data = require('../data/zoo_data');

const { species, hours } = data;

const getSpecieSched = ((animal) => species.find((specie) => specie.name === animal).availability);

const getFullSchedule = () => Object.entries(hours).reduce((acc, curr) => {
  if (curr[0] !== 'Monday') {
    acc[curr[0]] = {
      officeHour: `Open from ${curr[1].open}am until ${curr[1].close}pm`,
      exhibition: species.filter((specie) => specie.availability.includes(curr[0]))
        .map((specie) => specie.name),
    };
  }
  acc.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  return acc;
}, {});

function getSchedule(scheduleTarget) {
  const animals = species.map((specie) => specie.name).includes(scheduleTarget);
  const days = Object.keys(hours).includes(scheduleTarget);
  switch (true) {
  case !scheduleTarget:
  case !animals && !days:
    return getFullSchedule();
  case animals:
    return getSpecieSched(scheduleTarget);
  case days:
    return { [scheduleTarget]: getFullSchedule()[scheduleTarget] };
  default:
    return null;
  }
}
// if (!scheduleTarget) return getFullSchedule();
// if (!animals && !days) return getFullSchedule();
// if (animals) return getSpecieSched(scheduleTarget);
// if (days) return { [scheduleTarget]: getFullSchedule()[scheduleTarget] };

module.exports = getSchedule;
