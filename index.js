// Code your solution in this file.

function lowerCaseDrivers(array){
  return array.map( string => string.toLowerCase())
}

function nameToAttributes(array){
  return array.map((elm) => {
    elm_split = elm.split(" ");
    return { firstName: elm_split[0], lastName: elm_split[1]}
  })
}

function attributesToPhrase(array){
  return array.map(obj_elm => `${obj_elm.name} is from ${obj_elm.hometown}`)
}
// lowerCaseDrivers - this function takes an array of drivers, and
//  returns an array of the drivers names in lowercase.
// nameToAttributes - this function takes an array of drivers with their
//   first and last name separated by a space, and
//   returns an array of JavaScript objects with firstName and lastName attributes.
// attributesToPhrase - this function takes an array of drivers as JavaScript objects and
//  returns a string saying "<NAME OF DRIVER> is from <HOMETOWN>"
//   for each JavaScript object in the array.
//     Note that between the < and > we are looking for the value stored in the name
//     and hometown object attributes, not the strings "DRIVER" or "HOMETOWN"


// string => string.toLowerCase()
// same as
// (string) => { string.toLowerCase() }
// same as
// function(string){ string.toLowerCase() }
