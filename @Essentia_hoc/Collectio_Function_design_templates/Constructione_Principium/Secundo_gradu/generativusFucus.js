'use strict';

const generativusFucus = (fn) => {
  debugger

  const closureForFn = 'closure';
  const thisForFn = { this: 'this' };
  const fucus = function(...args) {

    fn.args = args;
    fn.closureForFn = closureForFn;
    fn.thisForFn = thisForFn;
    fn.bind(thisForFn);

    fucus.printFn = (fn) => {
      console.log(fn);
      return fucus;
    };

    return fn(...args);
  };
  return fucus;
};

const fn = function(...args) {
  debugger
};

const fucus = generativusFucus(fn);
fucus('a');
debugger
