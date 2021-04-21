'use strict';

// Getters/setters (object properties)

// Getter and setter - accessor properties
// When We call them we don't use brackets as in case of method!
// When We call setter we use = to assign sum parameter as setter argument!

const person = {
    name: "Alex",
    age: 27,

    get userAge() {
        return this.age;
    },

    set userAge(num) {
        this.age = num;
    }
};

console.log(person.userAge); // 27
console.log(person.userAge = 30); // 30


// Incapsulation
// we can use let variables for object props and getters/setters to make props more private
// we can use #prop_name syntaxis to make prop private

class User {

    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    #surname = 'Pavlov';
    
    say() {
        console.log(`User name: ${this.name} ${this.#surname}, age ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof(age) === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Forbidden value!');
        }
    }

    get userSurname() {
        return this.#surname;
    }

    set userSurname(surname) {
        this.#surname = surname;
    }
}

const ivan = new User('Ivan', 27);
console.log(ivan._age); // 27
ivan._age = 99;
console.log(ivan.age); // 99

ivan.age = 30;
ivan.age = 300; // Forbidden value!
console.log(ivan.age); // 30
console.log(ivan.userSurname); // Pavlov
ivan.userSurname = 'Drago';
console.log(ivan.userSurname); // Drago
ivan.say(); // User name: Ivan Drago, age 27