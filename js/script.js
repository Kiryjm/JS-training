
"use strict"; 

//warning for users
// alert("Hello!");

//window for users with choice
// const result = confirm("Are you here?");
// console.log(result);

//window for users with placeholder to enter text
//returns entered user answer as string
//if used + before prompt, result will be number
// const answer = +prompt("Are you 18?", "18");
// console.log(answer + 5);

//prompt, alert, confirm blocks page building until they will be executed
const answers = [];

answers[0] = prompt("Enter your name", '');
answers[1] = prompt("Enter your surname", '');
answers[2] = prompt("Enter your age", '');

// document.write(answers);
console.log(typeof(answers));

console.log(typeof(null)); //object  !!!


