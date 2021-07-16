'use strict';

const wrapper_fn = (fn) => (...args) => {
  // treat fn and args
  const str = `fn.toString : ${fn.toString()}
args : [${args.join(', ')}]`;
  console.log(str);
  // return result of function call
  return fn(...args);
};

// Using
const fn = (a, b) => a + b;
// First wrapped
const w_fn = wrapper_fn(fn);
// Last call function
const result = w_fn(2, 3);

console.dir({ result });




