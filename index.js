const returnFirstTwoDrivers = function(array){
    let newArray = [];
    let driver1 = array[0];
    let driver2 = array[1];
    newArray.push(driver1);
    newArray.push(driver2);
    return newArray;
}

const returnLastTwoDrivers = function(array){
    let newArray = [];
    let driver3 = array[2];
    let driver4 = array[3];
    newArray.push(driver3);
    newArray.push(driver4);
    return newArray;
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

let createFareMultiplier = function(number){
    let fareMultiplier = function(fare){
        return fare * number;
    }
    return fareMultiplier
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

let selectDifferentDrivers = function(drivers, driverArray){
    return driverArray(drivers)
}