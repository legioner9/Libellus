'use strict';
debugger
const arr = [1, 2, 3];

// add to tail return index
const s = arr.push(44);// s: 4 arr: (4) [1, 2, 3, 44]
// remove from tail return value
const s1 = arr.pop();// s1: 44 arr: (3) [1, 2, 3]

// remove from head return value
const s2 = arr.shift();// s2: 1 arr: (2) [2, 3]
// add to head
const s3 = arr.unshift(33);// s3: 3 arr: (3) [33, 2, 3]
