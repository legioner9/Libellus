'use strict';

const clone = val => {
  if (typeof val !== 'object' || val === null) {
    return val;
  }
  const objOrArray = Array.isArray(val) ? new Array(val.length) : {};
  for (const key in val) {
    if (Object.prototype.hasOwnProperty.call(val, key)) {
      objOrArray[key] = clone(val[key]);
    }
  }
  return objOrArray;
};

const propObj_ = {
  preComutClosure: (closureForFn) => closureForFn,
  comutClosure: (closureForFn) => closureForFn,
  closureToMoresFn: (bfn, closureForFn) => (closureForFn, bfn),
  returnBfn: (bfn, closureForFn) => (closureForFn, bfn),
  closureForFn: {},
  thisForFn: {},
};

const generativusFucus = (propObj, fn) => {
  debugger
  propObj.closureForFn = propObj.preComutClosure(propObj.closureForFn);
  const fucus = function(...args) {

    const bfn = fn.bind(propObj.thisForFn);
    fucus.bfn = bfn;
    fucus.args = args;
    fucus.closureForFn = propObj.closureForFn;
    fucus.thisForFn = propObj.thisForFn;

    fucus.printFn = function() {
      console.log(this.bfn);
      return fucus;
    };

    // comutatus fn
    const moresFn = propObj.closureToMoresFn(bfn, propObj.closureForFn);
    // comutatus closure
    propObj.closureForFn = propObj.comutClosure(propObj.closureForFn);
    // reditum moresFn
    propObj.returnBfn(moresFn, propObj.closureForFn)(...args);
  };
  return fucus;
};


const fn = function(...args) {
  console.dir({ args, this: this });
};

// Use

const fucus = generativusFucus(propObj_, fn);
fucus('a');
fucus('b');


// methods fucus:
fucus.printFn();

// fucus (as a functional object) after call has the following properties:
const { args, closureForFn, thisForFn } = fucus;
console.dir({ args, closureForFn, thisForFn });
debugger
