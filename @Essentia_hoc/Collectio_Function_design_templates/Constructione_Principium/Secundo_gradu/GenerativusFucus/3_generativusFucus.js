'use strict';

const generativusFucus = (fn, comutClosure, closureToMoresFn) => {

  let closureForFn = 'closure';
  const thisForFn = { this: 'this' };
  const fucus = function(...args) {

    const bfn = fn.bind(thisForFn);
    fucus.args = args;
    fucus.closureForFn = closureForFn;
    fucus.thisForFn = thisForFn;

    fucus.printFn = () => {
      console.log(bfn);
      return fucus;
    };

    // comutatus fn
    const moresFn = closureToMoresFn(bfn, closureForFn);
    // comutatus closure
    closureForFn = comutClosure(closureForFn);
    // reditum moresFn
    return moresFn(...args);
  };
  return fucus;
};

const fn = function(...args) {
  console.dir({ args, this: this });
};

// Use
const fucus = generativusFucus(fn);
fucus('a');

// methods fucus:
fucus.printFn();

// fucus (as a functional object) after call has the following properties:
const { args, closureForFn, thisForFn } = fucus;
console.dir({ args, closureForFn, thisForFn });
debugger
