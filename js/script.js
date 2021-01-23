
"use strict"; 

//Parameter passing by reference/by value

//passing by value (for primitives: string, numbers, boolean)
let a = 5,
    b = a; //value

b = b + 5;
console.log(a); //5
console.log(b); //10

//passing by reference (objects: arrays, function...)
const obj = {
    a: 5,
    b: 1
};

const copyObj = obj; //reference
copyObj.a = 10;
console.log(copyObj); // a: 10, b: 1
console.log(obj); // a: 10, b: 1

//Iterating properties received object and creating new object
function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
//A deep copy means that all of the values of the new variable are copied and 
//disconnected from the original variable. 
//A shallow copy means that certain (sub-)values are still connected 
//to the original variable.

//if we have embeded objects such copy will be shallow and x = 10 in both objects
newNumbers.c.x = 10;
console.log(newNumbers); // { a: 10, b: 5, c: { x: 10, y: 4 } }
console.log(numbers); // { a: 2, b: 5, c: { x: 10, y: 4 } }

 const add = {
     d: 17,
     e: 20
 };

 // { a: 2, b: 5, c: { x: 10, y: 4 }, d: 17, e: 20 } copy add to numbers
console.log(Object.assign(numbers, add)); 

//copy add to new object
const clone = Object.assign({}, add); 
clone.d = 20;
console.log(add);
console.log(clone);

const oldArray = ['a', 'b', 'c'];
//copy array to new array
const newArray = oldArray.slice();
newArray[1] = 'asgdhd';
console.log(oldArray); // [ 'a', 'b', 'c' ]
console.log(newArray); // [ 'a', 'asgdhd', 'c' ]

//Spread operator

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],

      // ... arrayName allows to add all elements to new array
      internet = [...video, ...blogs, 'vk', 'facebook']; 
console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

//pass three arguments
log(... num); // 2 5 7

const arr = ['a', 'b'];

const newArr = [...arr]; // [ 'a', 'b' ]
console.log(newArr);

const q = {
    one: 1,
    two: 2,
};

const newObj = {...q};
console.log(newObj); // { one: 1, two: 2 }