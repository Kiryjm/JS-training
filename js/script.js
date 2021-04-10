'use strict';

// Array iteration methods

// filter() method get callback function with filtering logic 
// as argument and returns new filtered array
const names = ['Ivan', 'Ann', 'Kevin','Vasisualiy'];

const shortNames = names.filter(function(name) {
    return name.length < 5;
});

console.log(shortNames); // [ 'Ivan', 'Ann' ]

// map() method transform each array element using callback function 
// passed as argument and returns new array with elements-results of callback function
const answers = ['IvAn', 'AnnA', 'Hello'];

const result = answers.map(item => item.toLowerCase());

console.log(result); // [ 'ivan', 'anna', 'hello' ]

// every()/some() methods check array for condition in callback function 
// passed as argument and return true, if condition is met on every/at least one 
// iterable element

const arr = [4, 'qwq', 'steefd'];
console.log(arr.some(item => typeof(item) === 'number')); 
// true, cause the first element is number 4

console.log(arr.every(item => typeof(item) === 'number')); // false

// reduce() used to form array from discrete elements
// result of passed as argument callback function is an argument passing to callback
// during the next call
const arrNum = [4, 5, 1, 3, 2, 6];

const res = arrNum.reduce((sum, current) => sum + current);
console.log(res); // 21

const arr2 = ['apple', 'pear', 'plum'];

const res2 = arr2.reduce((sum, current) => `${sum}, ${current}`);
console.log(res2); // apple, pear, plum

// reduce() can accept 3rd argument as initial value
const arr3 = [4, 5, 1, 3, 2, 6];

const res3 = arr3.reduce((sum, current) => sum + current, 3);
console.log(res3); // 24

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal',
};

// Object.entries() returns array of object properties and values 
// in [key, value] format and this order is not guaranteed to match object's one !!!

// we can call methods in chain
// for example to get props names with 'persone' value
const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);
console.log(newArr); // [ 'ivan', 'ann' ]

// output of Object.entries: array of arrays
/** 
 * [
  [ 'ivan', 'persone' ],
  [ 'ann', 'persone' ],
  [ 'dog', 'animal' ],
  [ 'cat', 'animal' ]
]
*/
