'use strict';

const esc = (code, s) => `\x1b[${code}m${s}\x1b[0m`;
const emoj = (num) => num.toString(16);

console.log('\xA9\xAE');
console.log('\u00A9\u00AE');
console.log(esc(35, 'Hello'));
console.log(emoj(535));

debugger
