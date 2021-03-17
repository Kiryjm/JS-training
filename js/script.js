'use strict';

// Document, window parameters

const box = document.querySelector('.box'),
      btn = document.querySelector('button');

      // readonly properties!!!
const width1 = box.clientWidth; // clientWidth - content+padding
const height1 = box.clientHeight; //clientHeight - content+padding
const width2 = box.offsetWidth; // offsetWidth - content+padding+border+margin+scrollbar
const height2 = box.offsetHeight; //offsetHeight - content+padding+border+margin+scrollbar

// scrollWidth - content+padding+border+margin+scroll part
const width = box.scrollWidth; 
//scrollHeight - content+padding+border+margin+scrollbar+scroll
const height = box.scrollHeight;

console.log(width, height);

// calculate full block height considering scroll
btn.addEventListener('click', () => {
    box.style.height = box.scrollHeight + 'px';
});


// read and write properties!!!

// scrollTop - what is the height of reamining unscrolled content
btn.addEventListener('mouseover', () => {
    console.log(box.scrollTop); // amount of scrolled (readed) text
});

// get all element coordinates
// css: right - distance from right page border to element
// js: right - distance from left page border to right element border
// css: bottom - distance from bottom page border to element
// js: bottom - distance from top page border to bottom element border

console.log(box.getBoundingClientRect().top); // 50

const style = window.getComputedStyle(box); // get computed styles of elements
console.log(style.display);

// get amount of scrolled pixels
console.log(document.documentElement.scrollTop);

//Two methods for changing scroll position working with window:
// scrollBy - scrolls relatively current position
window.scrollBy(0, 400); // scroll down 400 px from current position

// scrollTo - scrolls relatively all page
window.scrollTo(0, 400); // scroll down 400 px from top of the page