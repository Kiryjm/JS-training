// Named exports
export let one = 1;

let two = 2;

export{two};

export function sayHi() {
    console.log('Hello');
}

// Default exports

export default function sayDefHi() {
    console.log('Hello');
}