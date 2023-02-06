const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

// Declare the variable returnFirstTwoDrivers with const
// Assign an anonymous function to it
// return the first two drivers
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
}

// Declare the variable returnLastTwoDrivers with const
// Assign an anonymous function to it
// return the last two drivers
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// This is a higher-order function that takes in one argument, an integer
// It returns a function that will multiply a fare for a ride accordingly
// For example, if createFareMultiplier() receives an argument of 4, it will 
// return a function that takes in a fare as an argument and quadruples the fare.

const createFareMultiplier = function(integer) {
    return function multiplierFunction(fare) {
        return fare * integer;
    }
}

// Declare a variable with const and assign a function returned by createFareMultiplier() to it
// Invoke createFareMultiplier() in such a way that the new fareDoubler() function 
// accepts a fare as its lone argument and doubles it.
const fareDoubler = function multiplierFunction (fare) {
    return fare * 2; 
}

const fareTripler = function multiplierFunction (fare) {
    return fare * 3; 
}

// This function takes two arguments, an array of the names of Scuber's drivers 
// and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function.
// Returns the first two drivers when passed returnFirstTwoDrivers() as the second argument
// Returns the last two drivers when passed returnLastTwoDrivers() as the second argument
const selectDifferentDrivers = function(drivers, selectingDrivers) {
    if (selectingDrivers === returnFirstTwoDrivers) {
        return drivers.slice(0,2);
    }
    else if (selectingDrivers === returnLastTwoDrivers) {
        return drivers.slice(-2);
    }
}
// NOT USING CALLBACK FUNCTIONS...BUT PASSES TESTS
