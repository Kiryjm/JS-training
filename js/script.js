
"use strict"; 

// Getting elements from document

const box = document.getElementById('box');

console.log(box);

//getting pseudo array!!!
const btns = document.getElementsByTagName('button');

console.log(btns[0]);

const circles = document.getElementsByClassName('circle');
console.log(circles);

//passing css selector as argument. You should add dot for class using css selector!!!
const hearts = document.querySelectorAll('.heart');
console.log(hearts);

//querySelector methods has forEach method
hearts.forEach(item => {
    console.log(item);
});

//getting only one first element in document
const oneHeart = document.querySelector('div');
console.log(oneHeart);
