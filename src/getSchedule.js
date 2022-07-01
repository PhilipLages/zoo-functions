const data = require('../data/zoo_data');

const { species, hours } = data;

const getSpecSched = ((animal) => species.find(({ name }) => name === animal).availability);

const getFull = () => Object.entries(hours).reduce((acc, curr) => {
  if (curr[0] !== 'Monday') {
    acc[curr[0]] = {
      officeHour: `Open from ${curr[1].open}am until ${curr[1].close}pm`,
      exhibition: species.filter(({ availability }) => availability.includes(curr[0]))
        .map(({ name }) => name),
    };
  }
  acc.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  return acc;
}, {});

function getSchedule(scheduleTarget) {
  const animals = species.map(({ name }) => name).includes(scheduleTarget);
  const days = Object.keys(hours).includes(scheduleTarget);
  if (!scheduleTarget) return getFull();
  if (!animals && !days) return getFull();
  return (animals) ? getSpecSched(scheduleTarget) : { [scheduleTarget]: getFull()[scheduleTarget] };
}

module.exports = getSchedule;
