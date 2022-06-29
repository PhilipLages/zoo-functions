const data = require('../data/zoo_data');

const { employees } = data;
const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const managersIds = [stephanieId, olaId, burlId];

function isManager(id) {
  return managersIds.some((managerId) => managerId === id);
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } try {
    return employees.filter((employee) => employee.managers.includes(managerId))
      .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
  } catch (error) {
    return error.message;
  }
}

module.exports = { isManager, getRelatedEmployees };
