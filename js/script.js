'use strict';

// Promises

// Promise gets executor function with two callbacks - resolve and reject functions

// resolve executes when our executor function logic executes without errors
// then() method called on promise executes in that case using resolve function as an argument

// reject executes when we got error while executor function logic execution
// catch() method called on promise executes in that case using reject function as an argument

// finally() method executes anyway

console.log('Data request...');

const req = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Data preparation...');
    
        const product = {
            name: 'TV',
            price: 2000
        };
    
        resolve(product);

    }, 2000);
});

req.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            resolve(product);
        }, 2000);
    });
}).then(data => {
    data.modify = true;
    return data;
}).then(data => {
    console.log(data);
}).catch(() => {
    console.error('An error is occured!');
}).finally(() => {
    console.log('Finally');
});

// Promise.all() and Promise.race()

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });  
};

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

// Promise.all() is used to be convinced all our passed promises are executed 
// sucessfully and execute then() or catch() if one of our promises executes with errors
Promise.all([test(1000), test(2000)]).then(() => {
    console.log('All');
});

// Promise.race() is used to identify what promise resolves or rejects first 
// and due to this first executed promise it executes then() or catch() respectively
Promise.race([test(1000), test(2000)]).then(() => {
    console.log('All');
});