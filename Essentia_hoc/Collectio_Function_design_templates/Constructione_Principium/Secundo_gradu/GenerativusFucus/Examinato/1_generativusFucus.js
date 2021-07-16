'use strict';

const generativusFucus = (fn) => {

  const closureForFn = 'closure';
  const thisForFn = { this: 'this' };
  const fucus = function(...args) {

    const bfn = fn.bind(thisForFn);
    fucus.args = args;
    fucus.closureForFn = closureForFn;
    fucus.thisForFn = thisForFn;

    fucus.printFn = (fn) => {
      console.log(fn);
      return fucus;
    };

    return bfn(...args);
  };
  return fucus;
};

const fn = function(...args) {
  console.dir({ args, this: this });
};

// Use
const fucus = generativusFucus(fn);
fucus('a');

// fucus (as a functional object) after call has the following properties:
const { args, closureForFn, thisForFn } = fucus;
console.dir({ args, closureForFn, thisForFn });
debugger
