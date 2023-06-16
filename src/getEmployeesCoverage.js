const data = require('../data/zoo_data');

const { employees, species } = data;

function getEmployeeByName(employeeName) {
  return employees.find((employee) =>
    employee.firstName === employeeName
    || employee.lastName === employeeName);
}

const getEmployeeById = (employeeId) => employees.find((employee) => employee.id === employeeId);

const getEmployeeByNameOrId = (object) => {
  if (Object.keys(object).includes('name')) {
    return getEmployeeByName(object.name);
  }
  if (Object.keys(object).includes('id')) {
    return getEmployeeById(object.id);
  }
  return undefined;
};

const getSpeciesLocation = (speciesId) => {
  const foundSpecies = species.find((animal) => animal.id === speciesId);
  return foundSpecies.location;
};

const getSpeciesNames = (speciesId) => {
  const foundSpecies = species.filter((animal) => animal.id === speciesId);
  return foundSpecies[0].name;
};

const singleEmployeeCoverage = (object) => {
  const foundEmployee = getEmployeeByNameOrId(object);
  if (foundEmployee === undefined) {
    throw new Error('Informações inválidas');
  }
  const employeeRegistration = {
    id: foundEmployee.id,
    fullName: `${foundEmployee.firstName} ${foundEmployee.lastName}`,
    species: foundEmployee.responsibleFor.map((animal) => getSpeciesNames(animal)),
  };
  const locationsArray = [];
  for (let i = 0; i < foundEmployee.responsibleFor.length; i += 1) {
    locationsArray.push(getSpeciesLocation(foundEmployee.responsibleFor[i]));
  }
  employeeRegistration.locations = locationsArray;
  return employeeRegistration;
};

const getEmployeesCoverage = (obj) => {
  if (obj !== undefined) {
    return singleEmployeeCoverage(obj);
  }
  const allCoverageArray = [];
  for (let i = 0; i < employees.length; i += 1) {
    allCoverageArray.push(singleEmployeeCoverage(employees[i]));
  }
  return allCoverageArray;
};

module.exports = getEmployeesCoverage;
