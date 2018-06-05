// Code your solution here:
function driversWithRevenueOver (drivers, revenue) {
    // This function takes an array of driver JavaScript objects as the first argument and a string called revenue as the second argument. It returns an array of driver objects that have a revenue attribute that's greater than the passed-in revenue argument.
    return drivers.filter(function (driver) {
        return driver.revenue > revenue;
    });
};

function driverNamesWithRevenueOver(drivers, revenue)  {
    // This function works the same way as driversWithRevenueOver(). The difference is that it returns an array of strings representing the name of each driver who has a revenue greater than the specified amount. For example, driverNamesWithRevenueOver(drivers, 2000) will return ['Sammy'], as Sammy is the name of the matching driver object with a revenue greater than 2000.
    return driversWithRevenueOver(drivers, revenue).map(function (driver) {
        return driver.name;
    });
};

function exactMatch(drivers, obj)  {
    // This function takes an array of driver objects as the first argument and a JavaScript object that specifies an attribute and corresponding value. For example, exactMatch(drivers, { revenue: 3000 }) will return all drivers whose revenue attribute equals 3000, and exactMatch(drivers, { name: 'Bob' }) will return all drivers whose name attribute equals Bob.
    let key = Object.keys(obj);
    return drivers.filter(function (driver) {
        return driver[key] === obj[key];
    });
};

function exactMatchToList(drivers, obj)  {
    // This function works the same way as the exactMatch() function, except that instead of returning an array of driver objects, it returns an array of strings with each element in the array corresponding to the matching driver's name. For example, exactMatchToList(drivers, { revenue: 2000 }) will return `['Sammy']`, as `Sammy` is the name of the matching `driver` object.
    return exactMatch(drivers, obj).map( function (driver) {
        return driver.name;
    });
};