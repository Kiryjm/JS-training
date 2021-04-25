'use strict';

// Try/catch/finally. Errors handling

// Try/catch wrapped code block stops executing after error in try block
// and executes instead catch block
// outer code is still executing despite error in try block
// try/catch is used to hanlde errors exactly in wrapped by it block code

try {
    console.log('Normal');
    console.log(a);
    console.log('result');
} catch(e) {
    console.log(e);
}
console.log('Still normal');  
// Normal
// Error
// Still normal


// We can handle error object in catch block by properties:
// name - error type name
// message - printed message
// stack - all functions and stack of scripts that made this error happened
try {
    console.log('Normal'); // Normal
    console.log(a);
    console.log('result');
} catch(e) {               // Browser console: 
    console.log(e.name);  // ReferenceError
    console.log(e.message); // a is not defined
    console.log(e.stack); // ReferenceError: a is not defined at script.js:28
}


// finally code block executes in both way any error happened in try block code or not
// it used to complete started in try code block operations in any case 


try {
    console.log('Normal'); // Normal
    console.log(a);
    console.log('result');
} catch(e) {               // Browser console: 
    console.log(e.name);  // ReferenceError
    console.log(e.message); // a is not defined
    console.log(e.stack); // ReferenceError: a is not defined at script.js:28
} finally {
    // code executes anyway to complete started operations in any case
}


// To work with multipage sites we can check if page contains required element
// using try/catch and handling corresponding errors to continue executing 
// remaining script 

try {
    document.querySelector('.active').addEventListener('click', () => {
        console.log('click');
    });
} catch (e) {
    console.log(e);
}

console.log('normal');