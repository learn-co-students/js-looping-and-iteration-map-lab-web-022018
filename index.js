// Code your solution in this file.
function lowerCaseDrivers (drivers) {
  return drivers.map(driver => driver.toLowerCase());
}

function nameToAttributes (drivers) {
  return drivers.map(function makeObject(driver) {
    names = driver.split(" ");
    return {firstName: names[0], lastName: names[1]};
  });
}

function attributesToPhrase (drivers) {
  return drivers.map(driver => `${driver['name']} is from ${driver['hometown']}`);
}
