// // setTimeout function calls passed function after passed 2nd argument - time in ms
// const timerId = setTimeout(logger, 2000, 'Hello');

const btn = document.querySelector('.btn');
let timerId,
    i = 0;
// Animation in JS with setInterval
// default value of delay for setInterval is 4ms
function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}

btn.addEventListener('click', myAnimation);

// btn.addEventListener('click', () => {
//     // const timerId = setTimeout(logger, 2000, 'Hello');
//      timerId = setInterval(logger, 2000);
// });


// function logger () {
//     if (i == 3) {
//         clearInterval(timerId);
//     }
//     console.log('text');
//     i++;
// }

// Recursive setTimeout better than setInterval, cause setInterval doesn't consider 
// the time function will execute inside it and will reexecute this function again after 
// specified time amount. 
// setTimeout calls function once after specified time interval
// setInterval calls function each time after specified time interval

// // Recursive setTimeout 
// let id = setTimeout(function log() {
//     console.log('Hello');
//     id = setTimeout(log, 500);
// }, 500);

