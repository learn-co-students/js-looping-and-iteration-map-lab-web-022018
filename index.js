function lowerCaseDrivers(array) {
  return array.map(function (x) {
    return x.toLowerCase()
  })
}

function nameToAttributes(array) {
  return array.map(function (x) {
    return {firstName: x.split(' ')[0], lastName: x.split(' ')[1]}
  })
}

function attributesToPhrase(array) {
  return array.map(function (x) {
    return `${x.name} is from ${x.hometown}`
  })
}
