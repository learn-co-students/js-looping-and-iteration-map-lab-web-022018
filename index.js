// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(function(driver){
    return driver.toLowerCase()
  })
}

function nameToAttributes(drivers){
  return drivers.map(function(driver){
    const first = driver.split(' ')[0]
    const second = driver.split(' ')[1]

    return {firstName: first, lastName: second}
    })
}

function attributesToPhrase(obj){
  return obj.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`
  })
}
