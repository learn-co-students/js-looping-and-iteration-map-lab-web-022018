// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function (name) {return name.toLowerCase()})
}

function nameToAttributes(drivers) {
  return drivers.map(function (name) {return Object.assign({}, { firstName: name.split(" ")[0]}, { lastName: name.split(" ")[1]})})
}

function attributesToPhrase(drivers) {
  return drivers.map(function (object) {return `${object["name"]} is from ${object["hometown"]}`})
}
