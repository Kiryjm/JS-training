
"use strict"; 

const str = "teSt";
const arr = [1, 2, 4];

// console.log(str.length);
// console.log(arr.length);
console.log(str.toLowerCase());
console.log(str);

const fruit = "Some fruit";

console.log(fruit.indexOf("q")); //-1 means not find

const logg = "Hello world";

//cut piece of string from/till position not including ends
console.log(logg.slice(6, 11)); //world

//you can point from/till position from the end
console.log(logg.slice(-5, -1)); // worl

//the same without negative positions
console.log(logg.substring(6, 11)); //world

//cut piece of string from indicated position neede number of symbols not including ends
console.log(logg.substr(6, 5)); //world

const num = 12.2;
console.log(Math.round(num)); //12

const test = "12.2px";
//transform argument to another notation: parsing argument to integer
console.log(parseInt(test)); //12 and this will be integer number
console.log(parseFloat(test)); //12.2 and this will be float number
