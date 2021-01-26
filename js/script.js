
"use strict"; 

// Dynamic typing

// 1) to string
console.log(typeof(String(null))); 
console.log(typeof(String(4))); // string

// concatenation
console.log(typeof(5 + '')); // string

const num = 5;
console.log("https://vk.com/catalog/" + num); // https://vk.com/catalog/5

const fontSize = 26 + 'px';

//2) to number
console.log(typeof(Number('4'))); // number

console.log(typeof(+'4')); // number

console.log(typeof(parseInt("15px", 10))); // number

//All you get from user is a string datatype: from prompt, tag input or textarea, etc.
let answ = +prompt("Hello", "");

// To boolean
// False: 0, '', null, undefined, NaN 

let switcher = null; // false

if (switcher) {
    console.log('Working...');
}

switcher = 1; // true

if (switcher) {
    console.log('Working...');
}

console.log(typeof(Boolean('4'))); // boolean

console.log(typeof(!"4444")); // boolean

let exp = "!4444";
console.log(parseInt(exp, 10));
console.log(`${exp} is ${typeof(exp)} with value: ${exp.toString()}`);

console.log(typeof([] + [])); // string
console.log(typeof([] + ! + [])); // string
console.log([] + ! + []); // true
console.log([] + !! + []); // false



