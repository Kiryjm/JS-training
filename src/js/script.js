'use strict';

// Webpack

// Browser can't recognize our project module system and compile modules. 
// We need utility to pack all modules in one result file for proper 
// browser behaviour while scripts execution.
// Webpack is utility for compiling scripts and modules, 
// configuring projects, process styles and pictures, form folders.

const myModule = require('./main.js');

const myModuleInstance = new myModule();

myModuleInstance.hello();
myModuleInstance.goodbye();