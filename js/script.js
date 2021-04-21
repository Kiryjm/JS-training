'use strict';

// Dividing project into modules

const app = '123';

const number = 1;

// anonymous self-called function
// this function acts like separate module with its own scope
(function(){
    let number = 2;
    console.log(number); // 2
    console.log(number + 3); // 5
}());

console.log(number); // 1

// also we can transfer anonymous object with props and methods
// created by and passed from anonymous self-called function
const user = (function(){
    const privat = function() {
        console.log('I am a private function!');
    };

    return {
        sayHello: privat
    };
}());

user.sayHello(); // I am a private function!