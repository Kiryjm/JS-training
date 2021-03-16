'use strict';

// Working with dates

const now1 = new Date('2021-03-15');
console.log(now1); // 2021-03-15T00:00:00.000Z

//output is a Grinvich date considering time zones
const now2 = new Date(2020, 3, 16, 20);
console.log(now2); // 2020-04-16T17:00:00.000Z since GMT+3


// Each date in js storing in miliseconds from 1970 - timestamp.
const now3 = new Date(0);
console.log(now3); // 1970-01-01T00:00:00.000Z


// To use date before 1970 you sould pass negative numbers as argument
const now4 = new Date(-99999999999);
console.log(now4); // 1966-10-31T14:13:20.001Z

// Getting date components

const now5 = new Date();

console.log(now5.getFullYear()); // 2021
console.log(now5.getMonth()); // 2 is March since january is 0!!!!!!
console.log(now5.getDate()); // 16
console.log(now5.getDay()); // 2 but Sunday is 0!!!!!!
console.log(now5.getUTCHours()); // 23 since UTC time zone used

// time difference between local time zone and UTC in minutes!
console.log(now5.getTimezoneOffset()); // -180

// getTime retuens amount of miliseconds from 1.1.1970
console.log(now5.getTime()); // 1615852581014

const now6 = new Date();
console.log(now6.setHours()); // 1615910329088
console.log(now6); // 2021-03-16T15:59:35.807Z

// calculate time difference (for instance benchmarks 
// for system, function, loop, operation performance evaluation)
let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3; // i^3
}

let end = new Date();

alert(`Loop iterated for ${end - start} ms`);
