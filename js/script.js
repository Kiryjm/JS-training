'use strict';

// JSON format. Object deep clone

const persone = {
    name: 'Alex',
    tel: '+74444444',
    parents: {
        mom: 'Vlana',
        dad: 'Zhuga'
    }
};

// stringify() - turns javascript object to JSON format

console.log(JSON.stringify(persone)); // {"name":"Alex","tel":"+74444444"}

// parse() - turns JSON format came from server into javascript object

console.log(JSON.parse(JSON.stringify(persone))); // { name: 'Alex', tel: '+74444444' }

//deep clone
const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = 'Ann';

console.log(persone); // ... mom: 'Vlana' ...
console.log(clone); // ... mom: 'Ann' ...
