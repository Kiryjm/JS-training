'use strict';

// Stack event loop. Web Apis

console.log(1);

setTimeout(() => {
    console.log('timeout 2s');
}, 4000);

setTimeout(() => {
    console.log('timeout 4s');
}, 4000);

console.log(2);  // total output: 1 2 timeout 2s timeout 4s


// this task stops handling events by browser and executes until it's done
let k = 0;

function count() {
    for (let i = 0; i < 1e9; i++) {
        k++;
    }
    alert('done');
}

count();


// Interview event loop question sample

// First, setTimeout callback function with 0 ms delay executes after synchronous code, 
// cause callback goes through asynchronous parts in event loop: at first it gets 
// to the Web Api, after rhat goes to the Callback queue and only then executes 
// in Call stack

// Second, JS substitute 4 ms by 0 ms for meeting compatibility between browsers

setTimeout(() => {
    console.log(1);
}, 0);

console.log(2); // 2 1