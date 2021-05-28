'use strict';

const arr = [1, 2, 3];

// add to tail return length
const s = arr.push(44);// s: 4 arr: (4) [1, 2, 3, 44]
// remove from tail return value
const s1 = arr.pop();// s1: 44 arr: (3) [1, 2, 3]

// remove from head return value
const s2 = arr.shift();// s2: 1 arr: (2) [2, 3]
// add to head return new length
const s3 = arr.unshift(33);// s3: 3 arr: (3) [33, 2, 3]

arr[-5] = {};//arr: (3) [33, 2, 3, -5: {…}]

arr.forEach((item, index, init_arr) => {
  console.log(`${item} \t ${index} \t ${init_arr}`);
});

debugger
