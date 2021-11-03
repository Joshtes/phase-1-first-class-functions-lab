// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function (newDrivers){
   newDrivers = drivers.slice(0,2);
   return newDrivers
}

const returnLastTwoDrivers = function(newDrivers){
    newDrivers = drivers.slice(2);
    return newDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num){
    return totalFare => (totalFare * num)
}

function fareDoubler(totalFare){
    return totalFare * 2
}

function fareTripler(totalFare){
    return totalFare * 3
}

function selectDifferentDrivers (drivers, callback){
    return callback(drivers);
}

selectDifferentDrivers(drivers, returnFirstTwoDrivers())
selectDifferentDrivers(drivers, returnLastTwoDrivers())
