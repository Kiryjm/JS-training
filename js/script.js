'use strict';

// DOM elements navigation, data-attributes, for/of

// console.log(document.head);

// // get html tag content
// console.log(document.documentElement);

// // get all nodes inside parent node
// // doesn't have analog for getting all elements
console.log(document.body.childNodes);

// // get first and last child of body tag
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// // get first and last element except text node
// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);



// // get parent of the parent node of element with id = "current"
// console.log(document.querySelector('#current').parentNode.parentNode);
// console.log(document.querySelector('#current').parentElement);


// // data attributes
// // html attribute writenn in square brackets
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}