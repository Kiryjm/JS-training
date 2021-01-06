//working in modern mode
"use strict"; 

//Three types of quotes in JS
const quotes1 = `5`;
const quotes2 = "5";
const quotes3 = '5';

let und;
console.log(und); //undefined

const obj = {
    name: "Josh",
    age: 24,
    isMarried: false
};

//Two ways of accessing object properties:
//dot notation
console.log(obj.name);

//bracket notation
console.log(obj["name"]);

//Array is a special case of object. 
//It can contain different data types
let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];

console.log(arr[0]); // plum.png
console.log(arr[4]); // {}

//Symbol is promitive data type used for unique identifiers
//Symbols with the same name are different anyway
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 == id2); //false

//If we want symbols to be equal they have to be created
//by global registry

let id3 = Symbol.for("key1");
let id4 = Symbol.for("key1");

console.log(id3 == id4); //true

//Symbols are hidden properties for for..in cycle

let id = Symbol("id");
let user = {
  name: "Вася",
  age: 30,
  [id]: 123
};

for (let key in user)  {
    console.log(key);

} //output: name age (but not id)

//Getting all object properties including symbols
console.log(Object.getOwnPropertySymbols(user)); // name age [Symbol(id)]

//Getting all object keys including symbols
console.log(Reflect.ownKeys(user)); // ['name', 'age', Symbol(id)]

//BigInt - data type used for working with  high precise integers 
//bigger than 2^53-1
//letter n is used to indicate bigint
BigInt(Number.MAX_SAFE_INTEGER + 2n); //adding to max integer 2

console.log(typeof(145)); //number
console.log(typeof(145n)); //bigint

//There is constructor BigInt() for casting types to bigint 
console.log(BigInt(123)); //123n

//RangeError: The number 1.5 cannot be converted to a BigInt 
//because it is not an integer
console.log(BigInt(1.5)); 

//SyntaxError: Cannot convert 1.5 to a BigInt
console.log(BigInt('1.5'));
console.log(BigInt('15')); //15n


