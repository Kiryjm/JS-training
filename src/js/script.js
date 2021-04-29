'use strict';

// Function generator

// Function generator returns result consistently: each time result changing
// due to keyword yield 
function* generator() {
    yield 'S';
    yield 'c';
    yield 'r';
    yield 'i';
    yield 'p';
    yield 't';
}

const str = generator();

// // done: true/false - generator completed/non completed
// // next() method calls next yield
// console.log(str.next()); // { value: 'S', done: false }
// console.log(str.next()); // { value: 'c', done: false }
// console.log(str.next()); // { value: 'r', done: false }
// console.log(str.next()); // { value: 'i', done: false }
// console.log(str.next()); // { value: 'p', done: false }
// console.log(str.next()); // { value: 't', done: false }
// console.log(str.next()); // { value: undefined, done: true }

// // to get value from yield instead of object
// // use next() property value
// console.log(str.next().value); // S

function* count(n) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}

// execute generator function passed count() argument times
for (let k of count(7)) {
    console.log(k);  // 0 1 2 3 4 5 6
}

const counter = count(7);

// console.log(counter.next().value); // 0
// console.log(counter.next().value); // 1
// console.log(counter.next().value); // 2