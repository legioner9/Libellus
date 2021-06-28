'use strict';

const name = 'Marcus Aurelius';

console.log();
console.log(`name = ${name}`);

console.log();
console.log(`name.indexOf('Aur') = ${name.indexOf('Aur')}`);
console.log(`name.lastIndexOf('u') = ${name.lastIndexOf('u')}`);
console.log(`name.includes('Ma') = ${name.includes('Ma')}`);
console.log(`name.startsWith('re') = ${name.startsWith('re')}`);
console.log(`name.endsWith('lius') = ${name.endsWith('lius')}`);

console.log(`'A'.repeat(5) = '${'A'.repeat(5)}'`);
console.log(`'  ABC   '.trim() = '${'  ABC   '.trim()}'`);
console.log(`'  ABC   '.trimLeft() = '${'  ABC   '.trimLeft()}'`);
console.log(`'  ABC   '.trimRight() = '${'  ABC   '.trimRight()}'`);
console.log(`'Hello'.toLowerCase() = '${'hello'.toLowerCase()}'`);
console.log(`'Hello'.toUpperCase() = '${'hello'.toUpperCase()}'`);
console.log(`String.fromCharCode(80) = '${String.fromCharCode(80)}'`);


console.log('Modification : \n');
console.log(`name.split(' ') = '${JSON.stringify(name.split(' '))}'`);
console.log(`name.replace('r', 'R') = '${name.replace('r', 'R')}'`);
console.log(`name.replace(/r/g, 'R') = '${name.replace(/r/g, 'R')}'`);
console.log(`'Ave '.concat(name, '!') = '${'Ave '.concat(name, '!')}'`);


console.log();
console.log('Substring: \n');
console.log('Deprecated: String.prototype.substr(start, length)');
console.log(`name.substr(2) = '${name.substr(2)}'`);
console.log(`name.substr(-3) = '${name.substr(-3)}'`);
console.log(`name.substr(2, 4) = '${name.substr(2, 4)}'`);
console.log(`name.substr(-3, 2) = '${name.substr(-3, 2)}'`);
console.log(`name.substr(3, -2) = '${name.substr(3, -2)}'`);
console.log(`name.substr(-3, -2) = '${name.substr(-3, -2)}'`);
