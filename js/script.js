
"use strict"; 

//Arrays and pseudo arrays

const arr = [1, 2, 13, 26, 8, 10];
//sort numeric data types as strings
arr.sort(); // 1, 10, 13, 2, 26, 8
//uses quick sort. 
arr.sort(compareNum);
console.log(arr);

//if compare function for a and b returns positive -> b gets lower index than a
//if compare function for a and b returns negative -> a gets lower index than b 
//if compare function for a and b returns 0 -> a and b will be sorted 
//relatively to other elements, but not to each other

function compareNum(a, b) {
    return a - b;
}

arr[99] = 0;
console.log(arr.length); // 100
console.log(arr); // [ 1, 2, 3, 4, 6, 8, <93 empty items>, 0 ]

arr.forEach(function (item, i, arr) {
    console.log(`${i}: ${item} inside array ${arr}`);
});

//delete last array element
arr.pop();
//add element to the array's end
arr.push(10);

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//foreach analogue works only with array type entities!
//if break/continue supposed to use -> choose for of cycle!
for (let value of arr) {
    console.log(value);
}

const str = prompt("", "");
//transform string to array using indicated splitter
const products = str.split(", ");
//sort all elements in alphabet order< if they are strings
//
products.sort();
//merge string using indicated splitter
console.log(products.join('; '));


//Pseudo arrays - objects with indexed properties and length. F.e. HTML collection
//They dont have embeded array methods!



//Iterable objects - objects that implements Symbol.iterator method
let range = {
    0: 1,
    1: 5,
    length: 2
  };

  for (let num of range) {
    console.log(range[num]); // 1 5
  }