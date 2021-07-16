'use strict';

const fn = (...args) => {
  const closureObj = {};

  fn.args = args;
  fn.closureObj = closureObj;

  // do something ...
  console.dir({ fn, args, closureObj });
};

fn('a');
fn('b');
// Use
const statusCheckClosure = fn.closureObj;
const callArguments = fn.args;

console.dir({ statusCheckClosure, callArguments });
