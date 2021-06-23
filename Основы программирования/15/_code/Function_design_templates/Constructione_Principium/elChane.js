'use strict';

const fn_chain = (a) => (b) => (c) => a + b + c;

// Using

const res = fn_chain(1, 2, 3);

console.log(res);
