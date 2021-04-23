'use strict';

// ES6 modules

import {one, two} from './main.js';
import sayDefHi from './main.js';

// we can use alias for imported long name data
// or use * to import all from module

// To say browser consequentially add script files use type='module' in index.html
// and use fileName.js syntax in improt statement!

import {one as first} from './main.js';
import * as data from './main.js';

// // If we use webpack compiled bundle.js in script tag index.html
// // we use fileName without .js in import statement!

// import {one as first} from './main.js';
// import * as data from './main.js';

console.log(`${first} and ${two}`);
data.sayHi();
sayDefHi();