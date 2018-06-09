// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue
  })
}

// function driverNamesWithRevenueOver(drivers, revenue) {
//   const names = []
//
//   drivers.filter(function (driver) {
//     if (driver.revenue > revenue) {
//       names.push(driver.name)
//     }
//   })
//
//   return names
// }

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function (driver) {
    return driver.name
  })
}




function exactMatch(drivers, attribute) {
  return drivers.filter(function (driver) {
    if (driver.name === attribute.name || driver.revenue === attribute.revenue) {
      return driver.name
    }
  })
}


// function exactMatchToList(drivers, attribute) {
//   const names = []
//
//   drivers.filter(function (driver) {
//     if (driver.name === attribute.name || driver.revenue === attribute.revenue) {
//       names.push(driver.name)
//     }
//   })
//
//   return names
// }

function exactMatchToList(drivers, attribute) {
  return exactMatch(drivers, attribute).map(function (driver) {
    return driver.name
  })
}
