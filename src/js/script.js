'use strict';

// JS animations and requestAnimationFrame

// requestAnimationFrame allows to execute functions as animations
// setting up our animation to the browser updating frequency 
// minimizing browser load

// requestAnimationFrame executes multiple animation simultaneously

const btn = document.querySelector('.btn'),
      elem = document.querySelector('.box');  
let pos = 0;

// using hardcoded number of function calls every 10ms

// function myAnimation() {
//     let pos = 0;

//     const id = setInterval(frame, 10);
//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + 'px';
//         }
//     }
// }

// using optimized animation call
function myAnimation() {
    pos++;
    elem.style.top = pos + "px";
    elem.style.left = pos + 'px';

    if (pos < 300) {
        requestAnimationFrame(myAnimation);
    }
}

btn.addEventListener('click', () => requestAnimationFrame(myAnimation));

let id = requestAnimationFrame(myAnimation);
cancelAnimationFrame(id);
