// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./04-names');
const sayHi = require('./05-utils');
const data = require('./06-alternative-flavor');

console
    .log('____________RUNNING_APP____________');
require('./07-mind-grenade');
sayHi('susan');
sayHi(names.john);
sayHi(names.peter);
console.log("DATA",data);
console
    .log('___________________________________');
