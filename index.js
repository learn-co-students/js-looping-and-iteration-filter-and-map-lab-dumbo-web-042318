// Code your solution here:

function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function(driver){
    return parseInt(driver.revenue) > parseInt(revenue);
  });
}

function driverNamesWithRevenueOver(drivers, revenue){
  return driversWithRevenueOver(drivers, revenue).map(function(driver){
    return driver.name;
  });
}

function exactMatch(drivers, attributeObj){
  return drivers.filter(function(driver){
    return driver[Object.keys(attributeObj)[0]] === Object.values(attributeObj)[0];
  });
}

function exactMatchToList(drivers, attributeObj){
  return exactMatch(drivers, attributeObj).map(function(driver){
    return driver.name;
  });
}
