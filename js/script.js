'use strict';

// Event handlers

const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('Click');
// };

// // the last onclick function call will be executed!
// btn.onclick = function() {
//     alert('Second click');
// };

// // two consequtive fucntion call on mouse click will be executed
// btn.addEventListener('click', () => {
//     alert('Click');
// });

// btn.addEventListener('click', () => {
//     alert('Second click');
// });

// we can pass event as argument in callback-function to get element data
// you can get element by accessing target property
// .type property allows to show type of event happened
// let i = 0;
const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);

    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);   
    // }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

// you must add eventListener in loop for pseudo arrays!
// also you can pass options as argument. e.g. execute cllback once on click

btns.forEach(item => {
    item.addEventListener('click', deleteElement, {once: true});
});

const link = document.querySelector('a');


link.addEventListener('click', (e) => {

    // cancel standard browser behaviour to go href
    e.preventDefault();
    console.log(e.target);
});