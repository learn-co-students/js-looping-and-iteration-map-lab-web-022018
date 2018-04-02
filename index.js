// Code your solution in this file.
function lowerCaseDrivers(array){
  return array.map(driver => driver.toLowerCase())
}

function nameToAttributes(arr){
  return arr.map(function (driver){
      let splitDriver = driver.split(" ");
      return Object.assign({}, { firstName: splitDriver[0], lastName: splitDriver[1]});
    } )
}

function attributesToPhrase(arr){
  return arr.map(function (driver){
    return `${driver.name} is from ${driver.hometown}`
  })
}
