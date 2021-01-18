
"use strict"; 

//Functions
//let const declared in function scope are accessible only there and are not global!

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessage('Hello World!');
console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));


//Function declaration
//This function is created before code execution
//we can write declaration after or before function call

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

//Function expression
//This function invokes only whe code reaches this expression
//we can write declaration only before function call

const logger = function() {
    console.log("Hello");
};
logger();

//Arrow functions
//arrow functions don't have own this context, 
//hence they use this value as outer context reference

//shortcut
const calc = (a, b) => a + b;
//classic
// const calc = (a, b) => { return a + b; };
console.log();

var f = () => this;
console.log(f());


// //closure ex 1
// let name = "John";

// function sayHi() {
//   console.log("Hi, " + name);
// }

// name = "Pete";
// sayHi(); //Hi, Pete

//closure ex 2
function makeWorker() {
    let name = "Pete";
  
    return function() {
      console.log(name);
    };
  }
  
  let name = "John";
  
  let work = makeWorker();
  work(); //Pete

  
  function makeCounter() {
    let count = 0;
  
    return function() {
      return count++; // есть доступ к внешней переменной "count"
    };
  }
  
  let counter = makeCounter();
  
  console.log( counter() ); // 0
  console.log( counter() ); // 1
  console.log( counter() ); // 2