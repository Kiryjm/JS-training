'use strict';

// Regular expressions

// RegExp consist of two parts: pattern and flags.
// Pattern is like symbol mask of what we want to find/delete/etc.

// new RegExp('pattern', 'flags'); // old version
// /pattern/f; // modern version

const ans = prompt('Введите ваше число');

const reg = /\d/g;

// mregexp method test() returns boolean whether passed string contains regexp pattern
console.log(reg.test(ans)); 

console.log(ans.match(reg));

const str = 'My name is R2D2';
console.log(str.match(/\D/ig));

// classes in regexp:
// \d - digits
// \w - words, letters
// \s - spaces

// Reverse classes in regexp:
// \D - non digits
// \W - non eords, letters
// \S - non spaces

// flags: may be combined together
// i - ignore capitalization
// g - global. For searching many entries
// m - multiline mode search 


// search() method returns position number of found substrings
// -1 if no substrings were found
console.log(ans.search(reg)); 

// match() method returns array of found substring, its index, string for searching
// or null in case of substring was not found
console.log(ans.match(reg)); 

const pass = prompt('Password');

// replace() method has 2 arguments: 
// modified string and string with text to replace for every match
// Dot /./ in regexp is every symbol in string
console.log(pass.replace(/./g, "*"));

// To shield symbol we must write backslash!
console.log(pass.replace(/\./g, "*"));

console.log('12-34-56'.replace(/-/g, ':'));

