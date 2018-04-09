// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  newArr = drivers.map(function (driver) { return driver.toLowerCase() });
  return newArr
}

function nameToAttributes(drivers) {
  newArr = drivers.map(function (driver) {
  const firstLast = driver.split(" ");
  return {firstName: firstLast[0], lastName: firstLast[1]}
   });
  return newArr
}

function attributesToPhrase(drivers) {
  newArr = drivers.map(function (driver) { return `${driver.name} is from ${driver.hometown}`; });
  return newArr
}
