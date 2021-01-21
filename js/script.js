
"use strict"; 

//Callbacks

function first() {
    //Do something
    setTimeout(function () {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

//function passed as argument in another function
function learnJS(lang, callback) {
    console.log(`I study: ${lang}`);
    callback();
}

function done() {
    console.log(`I've passed this lesson!`);
}

learnJS('JavaScript', done);


//Objects and their methods

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {
        console.log("Test");
    }
};

options.makeTest();

//Object destructurization
const {border, bg} = options.colors;
console.log(border);

console.log(options.name);

//delete indicated property from object
delete options.name;
console.log(options);

//foreach analogue
let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Property ${i} has value ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Property ${key} has value ${options[key]}`);
        counter++;
    }
}
console.log(counter);

//get all object properties
console.log(Object.keys(options));

//get number of object properties
console.log(Object.keys(options).length);
