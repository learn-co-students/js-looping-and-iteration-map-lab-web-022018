// Code your solution in this file.
  function lowerCaseDrivers(array){
  newArray = []
  for (const element in array){
    newArray.push(array[element].toLowerCase())
  }
  return newArray
}
function nameToAttributes(array){
let newArray = []
    for (const element in array){
      let fullName = array[element].split(" ")
      newArray.push(Object.assign({firstName:fullName[0],lastName:fullName[1]}))
    }
  return newArray
}

  function attributesToPhrase(array){
    newArray = []
    for (const element in array){
      newArray.push(`${array[element].name} is from ${array[element].hometown}`)

    }

    return newArray

  }
