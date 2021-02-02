'use strict';

// Mobile browser events

// touchstart - when user touch element by finger
// touchmove - when user move finger after touching element(swipe)
// touchend - when user ends touching element
// touchend - when user take a finger off an element
// touchenter - when user move finger across the screen and getting over an element
// touchleave - when user move finger out of an element
// touchcancel - when user don't touch the screen

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('start');
        // console.log(e.touches);
        console.log(e.targetTouches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        
        // getting X coordinate of the first finger involved in touchmove event
        console.log(e.targetTouches[0].pageX);
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault();
        console.log('end');
    });
});

// Additional movile event properties

// touches - getting the list of all fingers touching the screen
// targetTouches - getting the list of all fingers touching the element
// changedTouches - getting the list of all fingers involved in event

