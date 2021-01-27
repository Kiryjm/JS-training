
"use strict"; 

// Actions with elements from document

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');

console.dir(box);
box.style.backgroundColor = 'blue';
box.style.width = '500px';

box.style.cssText = `background-color: blue; width: 500px`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

//change style for group of elements
hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

//create DOM element
const div = document.createElement('div');
// const text = document.createTextNode('sample text');

div.classList.add('black');

//add element div to the end of the document
document.body.append(div);

//if element used once, we may not declare variable and append element on-the-fly
document.querySelector('.wrapper').append(div);

// //add element to the end of the parent element
// wrapper.append(div);
// wrapper.appendChild(div);

// //add element to the head of the parent element
// wrapper.prepend(div);

// //add element before specified element on which we call this method
// hearts[0].before(div);
// wrapper.insertBefore(div, hearts[1]);

// //add element after specified element on which we call this method
// hearts[0].after(div);

// //remove specified element
// circles[0].remove();
// wrapper.removeChild(hearts[1]);

// //replace element on which we call this method by specified element
// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]);

//add text/HTML structure to the specified element
div.innerHTML = "<h1>Hello World</h1>";

// //add text only to the specified element
// div.textContent = "Hello";

//insert HTML structure using insert position before/after element begin/end
//this example insert HTML structure outside after specified div element
div.insertAdjacentHTML("afterend", "<h2>Hello</h2>");