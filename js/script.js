
"use strict"; 

//Expression interpolation
//use template strings with back quotes  to embed variables into strings
const category = 'toys';
console.log(`https://someurl.com/${category}/`);

const user = "Lori";

alert(`Hi, ${user}`);

//Operators in JS
console.log('arr' + " - object");

console.log(4 + +" - object"); //NAN
console.log(4 + +"5"); //9

//increment/decrement
let incr = 10,
    decr = 10;

// incr++;
// decr--;

//postfix form
console.log(incr++); //10
console.log(incr); //11

console.log(decr--); //10
console.log(decr); //9

//prefix form
console.log(++incr); //10
console.log(incr); //11

console.log(--decr); //10
console.log(decr); //9

console.log(5%2); //1


//non strict comparison(value)
console.log(2 * 4 == '8'); //true

// strict comparison(value and data type)
console.log(2 * 4 === '8'); //false

const isChecked = true,
      isCLose = true;

console.log(isChecked && isCLose);
console.log(2 + 2 * 2 === 6); //true

//Unary OR | and AND & operators for binary representation
//used to form mask for adding/checking user permissions due to roles
const ACCESS_ADMIN = 1;          // 00001
const ACCESS_GOODS_EDIT = 2;   // 00010
const ACCESS_GOODS_VIEW = 4;     // 00100
const ACCESS_ARTICLE_EDIT = 8; // 01000
const ACCESS_ARTICLE_VIEW = 16;  // 10000
    
const guest = ACCESS_ARTICLE_VIEW | ACCESS_GOODS_VIEW; // 10100
const editor = guest | ACCESS_ARTICLE_EDIT | ACCESS_GOODS_EDIT; // 11110
const admin = editor | ACCESS_ADMIN; // 11111
 
alert(editor & ACCESS_ADMIN); // 0, access denied
alert(editor & ACCESS_ARTICLE_EDIT); // 8, access granted

//Operator ~(binary not) used to round values
alert( ~~12.345 ); // 12
//XOR operator ^ used to round values
alert( 12.345 ^ 0 ); // 12