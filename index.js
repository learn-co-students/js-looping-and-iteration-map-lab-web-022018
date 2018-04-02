// Code your solution in this file.
function lowerCaseDrivers(array){
  return array.map(function(name){return name.toLowerCase()})
}
function nameToAttributes(array){
  return array.map(function(fullName){
    const first = fullName.split(' ')[0]
    const last = fullName.split(' ')[1]
  return {firstName: first, lastName: last}
  })
}
function attributesToPhrase(drivers) {
  return drivers.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}
