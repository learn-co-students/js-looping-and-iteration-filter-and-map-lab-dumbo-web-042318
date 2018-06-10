function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue;
  })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const newDrivers = driversWithRevenueOver(drivers, revenue);
  return newDrivers.map(function (driver) {
    return driver.name;
  });
}
function exactMatch(drivers, attribute) {
  const key = Object.keys(attribute);

  return drivers.filter(function (driver) {
    return driver[key] === Object.values(attribute)[0]
  })
}

function exactMatchToList(drivers, attribute) {
  const matches = exactMatch(drivers, attribute);

  return matches.map(function (driver) {
    return driver.name;
  });
}
