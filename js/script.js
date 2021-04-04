'use strict';

// Rest operator and default parameters

// rest operator is passed last!
const log = function(a, b, ...rest) {
    console.log(a, b, rest);
};

log('basic', 'rest', 'operator', 'usage'); // basic rest [ 'operator', 'usage' ]

// we can pass parameter as argument which has default value
function calcOrDouble(number, basis = 2) {
    console.log(number * basis);
}

calcOrDouble(3);