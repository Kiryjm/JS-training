
"use strict"; 

// Interview tasks

//•	Какое будет выведено значение: let x = 5; alert( x++ ); ?

let x = 5;
alert( x++ ); // 5, but now x = 6

// • Чему равно такое выражение: [ ] + false - null + true ?

console.log([] + false - null + true ); // NaN

// [] turns into "" when + used
console.log([] + false); // false type: string
console.log([] + false - null); // NaN type: number

//•	Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?

let y = 1;
let x = y = 2;
console.log(x); // 2

// •	Чему равна сумма [ ] + 1 + 2?

console.log([] + 1 + 2); //12

// •	Что выведет этот код: alert( "1"[0] )?

console.log( "1"[0] ); // 1

// •	Чему равно 2 && 1 && null && 0 && undefined ?
// expr1 && expr2: If expr1 can be converted to true, returns expr2; else, returns expr1

console.log(2 && 1 && null && 0 && undefined); // null

//•	Есть ли разница между выражениями? !!( a && b ) и (a && b)?

let a = [],
    b = 4;
console.log(!!( a && b )); // true
console.log( a && b ); // 4
// Yes, !! operator turns expression into boolean

// •	Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
// expr1 || expr12 : If expr1 can be converted to true, returns expr1; else, returns expr2
// && has greater priority than || !!!!!!!!

console.log( null || 2 && 3 || 4); // 3

// •	a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?

let c = [1, 2, 3],
    d = [1, 2, 3];
console.log(c == d); // false

//•	Что выведет этот код: alert( +"Infinity" ); ?

console.log( +"Infinity" ); // Infinity

//•	Верно ли сравнение: "Ёжик" > "яблоко"?

console.log("Ёжик" > "яблоко"); // false
//Strings compared to each other by symbol

// •	Чему равно 0 || "" || 2 || undefined || true || falsе ?

console.log( 0 || "" || 2 || undefined || true || false ); // 2