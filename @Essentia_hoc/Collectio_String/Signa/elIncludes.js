'use strict';

if (!String.prototype.includes) {
  String.prototype.includes = function (substring) {
    return this.indexOf(substring);
  };
}

const name = 'Marcus Aurelius';

console.log(name.includes('aure'));
console.log(name.includes('Aure'));
