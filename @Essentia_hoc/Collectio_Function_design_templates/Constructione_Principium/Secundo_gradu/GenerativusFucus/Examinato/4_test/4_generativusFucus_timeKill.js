'use strict';

const preComutClosure_ = (closureForFn) => {
  closureForFn.timer.timeout  = setTimeout(() => {
    closureForFn.flags.kill = true;
  }, closureForFn.time.msec);
};
const comutClosure_ = (closureForFn) => closureForFn;
const closureToMoresFn_ = (bfn, closureForFn) => bfn;
const returnBfn_ = (bfn, closureForFn) => {
  if (!closureForFn.flags.kill) {
    return bfn;
  } else return () => undefined;
};
const closureForFn_ = {
  context: {},
  flags: { kill: false, },
  time: { msec: 300, },
  timer: { timeout: null, },
};

const generativusFucus = (
  fn,
  preComutClosure = preComutClosure_,
  comutClosure = comutClosure_,
  closureToMoresFn = closureToMoresFn_,
  returnBfn = returnBfn_,
  closureForFn = closureForFn_,
  thisForFn = {}
) => {
  debugger
  closureForFn = preComutClosure(closureForFn);

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
    returnBfn(moresFn, closureForFn)(...args);
  };
  return fucus;
};


const fn = function(...args) {
  console.dir({ args, this: this });
};

// Use

const fucus = generativusFucus(fn);
fucus('a');
fucus('b');


// methods fucus:
fucus.printFn();

// fucus (as a functional object) after call has the following properties:
const { args, closureForFn, thisForFn } = fucus;
console.dir({ args, closureForFn, thisForFn });
debugger
