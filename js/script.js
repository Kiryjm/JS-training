'use strict';

// LocalStorage

// // setting new key-value pair

// localStorage.setItem('number', 5);

// // get data from localStorage by key

// console.log(localStorage.getItem('number')); // 5

// // removing data from localStorage

// localStorage.removeItem('number'); // if we remove data before it retrieving, result will be null

// // clear localStorage completely

// localStorage.clear();

const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      change = document.querySelector('#color');

// if localStorage has key isChecked with value true, make checkbox be checked
if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = 'red';
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});

// to store objects in localStorage you should convert them to JSON format
// otherwise we will get value [object Object]

const persone = {
    name: 'Alex',
    age: 25
};

const serializedPersone = JSON.stringify(persone);
localStorage.setItem('Alex', serializedPersone);

console.log(JSON.parse(localStorage.getItem('Alex')));
