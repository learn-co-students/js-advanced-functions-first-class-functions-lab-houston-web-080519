// Code your solution in this file!
const returnFirstTwoDrivers = function(driversArray) {
    let newArray = new Array();
    newArray.push(driversArray[0], driversArray[1]);
    return newArray;
  };
  
  const returnLastTwoDrivers = function(driversArr) {
    let newArr = new Array();
    newArr.push(
      driversArr[driversArr.length - 2],
      driversArr[driversArr.length - 1]
    );
    return newArr;
  };
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  const createFareMultiplier = function(int) {
    return function(fare) {
      return fare * int;
    };
  };
  
  const fareDoubler = createFareMultiplier(2);
  
  const fareTripler = createFareMultiplier(3);
  
  const selectDifferentDrivers = function(drivers, pickEm) {
    return pickEm(drivers);
  };