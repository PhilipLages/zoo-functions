const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  return (!employeeName) ? {} : employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName);
}

module.exports = getEmployeeByName;
