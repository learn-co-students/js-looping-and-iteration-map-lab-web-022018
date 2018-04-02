// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(driver => driver.toLowerCase())
}

function nameToAttributes(drivers) {
  return drivers.map(function (driver) {
    arr = driver.split(" ");
    return {firstName: arr[0], lastName: arr[1]}
  })
}

function attributesToPhrase(drivers) {
  return drivers.map(driver => `${driver["name"]} is from ${driver["hometown"]}`)
}
