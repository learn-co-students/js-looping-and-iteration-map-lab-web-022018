// Code your solution in this file.
function lowerCaseDrivers(drivers){
  let returnDrivers = []
  for (let driver of drivers){
    returnDrivers.push(driver.toLowerCase())
  } return returnDrivers
}
function nameToAttributes(drivers){
  let returnArray = []
  for (const driver of drivers){
    returnArray.push({firstName: `${driver.split(" ")[0]}`, lastName: `${driver.split(" ")[1]}`})
  } return returnArray
}
function attributesToPhrase(driverObjs){
  let returnArray = []
  for (const driver of driverObjs){
    returnArray.push(`${driver['name']} is from ${driver['hometown']}`)
  } return returnArray
}
