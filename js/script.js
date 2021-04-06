'use strict';

// Asynchronous tasks and server communication using AJAX.

// AJAX - asynchronous javascript and xml
// technology used to make http requests to server and reload only specified page elements


const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

// input event occurs each time some data was typed or deleted from form
// change event occurs when element lost its focus 
inputRub.addEventListener('input', () => {

    // Old object version XMLHttpRequest for working with AJAX
    const request = new XMLHttpRequest();

    // request type passes in uppercase
    request.open('GET', 'js/current.json');

    // set request header to inform transfer protocols about sending data type and encoding
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    // request sending depending of http request type. If it's POSt we passes argument body
    request.send();

    // readystatechange event occurs when request state is changed
    // this event observes readyState property
    // load event occurs when response is ready
    request.addEventListener('load', () => {
        if (request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = "Something went wrong";
        }
    });

    // response status - number
    // statusText - text after number
    // response - server response
    // readyState - number from 0 to 4. Contains current state of our request
});