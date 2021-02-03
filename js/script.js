'use strict';

// Async, defer, dynamic scripts

const p = document.querySelectorAll('p');
console.log(p);

// Create script tag and load dynamic script which will be executed 
// after it will be append to the document.
// User can change executing order by changing async attribute value
// by script load synchronizing calling such function
function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);
}

loadScript('js/test.js');
loadScript('js/some.js');
