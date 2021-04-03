'use strict';

// // Call context. This keyword

// // 4 ways of fucntion call:



// // 1) Usual functions: this = window if non strict,
// // in strict mode it will be undefined
// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         return a + b;
//     }

//     console.log(sum());
    
// }
// showThis(4, 5); 



// // 2) Function inside objects: this = object 
// // in both strict and non strict modes

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         function shout() {
//         console.log(this);
//         }
//         shout();
//     }
// };

// obj.sum();



// // 3) Function constructors and classes: this - new object 

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }

// const alex = new User('Alex', 27);



// 3) Function constructors and classes: this - new object 

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'John'
};

// call and apply functions bind function on which they were called
// with specified as argument object
// example: this context and passed object binding
// difference: apply function applies array of arguments

sayName.call(user, 'Smith'); // {name: "John"} JohnSmith
sayName.apply(user, ['Smith', 'Tom']); // {name: "John"} JohnSmith

// bind create new function for context binding
// argument - object with context to bind with
// bind  - manual context binding

function count(num) {
console.log(this);

    return this*num;
}

const double = count.bind(2); // 2 passed as this
console.log(this);
console.log(double(3)); // 6

const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log(this); // context call is element on which event happened
});

btn.addEventListener('click', () => {
    console.log(this); // context call is window
});

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this.num); // 5
        };

        say(this);
    }
};

obj.sayNumber();

// As addEventListener argument if callback is 
// classic function() {...} - this will refer to context of element on which event happened
// this = event.target
// 