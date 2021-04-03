'use strict';

//Constructor functions

// const num = new Number(3);
// console.log(num); // [Number: 3]

const num = new Function(3);
console.log(num); // [Function: anonymous]

//function User is a constructor function
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function(name) {
    console.log(`User ${this.name} is gone`);
};

const alex = new User('Alex', 27);
const sam = new User('Sam', 21);
 
alex.exit(); // User Alex is gone

alex.hello(); // Hello, Alex
sam.hello(); // Hello, Sam

// User { name: 'Alex', id: 27, human: true }
console.log(alex);
// User { name: 'Sam', id: 21, human: true }
console.log(sam);