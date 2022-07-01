const data = require('../data/zoo_data');

const { species, employees } = data;

const getEmployees = () => employees.reduce((acc, curr) => {
  const getResponsible = species.filter(({ id }) => curr.responsibleFor.includes(id));
  acc.push({
    id: curr.id,
    fullName: `${curr.firstName} ${curr.lastName}`,
    species: getResponsible.map(({ name }) => name),
    locations: getResponsible.map(({ location }) => location),
  });
  return acc;
}, []);

function getEmployeesCoverage(employeeCoverage) {
  if (!employeeCoverage) return getEmployees();
  const objToArray = Object.entries(employeeCoverage)[0];
  const name = getEmployees().find((employee) => employee.fullName.includes(objToArray[1]));
  const id = getEmployees().find((employee) => employee.id.includes(objToArray[1]));
  return (objToArray[0] === 'name') ? name : id;
  // if (!name || !id) throw new Error(/^Informações inválidas$/);
}

// console.log(getEmployeesCoverage({ name: 'Sharonda' }));

module.exports = getEmployeesCoverage;
