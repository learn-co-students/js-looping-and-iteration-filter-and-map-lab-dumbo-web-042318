// Code your solution here:
function driversWithRevenueOver(drivers, num){
  return drivers.filter(driver => driver.revenue >=num);
}

function driverNamesWithRevenueOver(drivers, num){
  return driversWithRevenueOver(drivers, num).map(driver=> driver.name);
  // return drivers.filter(driver => driver.revenue >= num).map(driver=> driver.name);
}

function exactMatch(drivers, keyval){
  let key = Object.keys(keyval);
  return drivers.filter(x => x[key]===keyval[key]);
}
function exactMatchToList(drivers, keyval){
  let key = Object.keys(keyval);
  let newArr = drivers.filter(x => x[key]===keyval[key]);
  return newArr.map(driver=> driver.name);
}
