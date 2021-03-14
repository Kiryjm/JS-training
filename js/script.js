'use strict';

// ClassList and events delegation

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

// // getting number of classes for indicated button
// console.log(btns[0].classList.length);

// // getting indicated classes for button
// console.log(btns[0].classList.item(0)); //blue

// // adding red classes for indicated button
// console.log(btns[1].classList.add('red'));

// // deleteing blue classes for indicated button
// console.log(btns[0].classList.remove('blue'));

// // adding/removing classes for indicated button if they absent/present
// // returns true if toggled class presents, otherwise false
// console.log(btns[0].classList.toggle('blue'));

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }

    btns[1].classList.toggle('red');
});

// console.log(btns[0].className);

// Event delegation used when there are many elements with equal handlers 
// and we want to apply handlers for dynamically changing elements

wrapper.addEventListener('click', (event) => {

    // We should check if click has hapenned
    // cause not all elements support clcik event: e.g. <br /> - single line break
    // Logging Hello in console when user clicks on buttons only

    if (event.target && event.target.matches("button.red")) //or event.target.tagName == "BUTTON"
    {
        console.log('Hello');
    }
});

// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('Hello');
//     });
// });

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);