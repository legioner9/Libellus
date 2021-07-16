'use strict';

const wrapper = (fn) => {
  // enter closure logic
  console.log(`${fn.name} start`);
  // return with behaviour
  return (...args) => {
    // enter fn logic
    // before call fn logic
    console.log('before call');
    const result = fn(...args);
    // after call fn logic
    console.log('after call');
    // return result
    return result;
  };
};

// Use
const fn = (a, b) => a + b;
// First wrapped
const w_fn = wrapper(fn);
// Last call function
const res = w_fn(3, 5);

console.log(`result: ${res}`);

// console:
// ramus_ret_chain.js:5 fn start
// ramus_ret_chain.js:10 before call
// ramus_ret_chain.js:13 after call
// ramus_ret_chain.js:26 result: 8
