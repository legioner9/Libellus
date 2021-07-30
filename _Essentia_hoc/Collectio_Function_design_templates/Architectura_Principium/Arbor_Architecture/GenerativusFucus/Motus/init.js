'use strict';

const { propObj, generativusFucus } = require('v.1');

const fn = function(...args) {
  console.dir({ args, this: this });
};

debugger
const fucus = generativusFucus(propObj, fn);
fucus('a');
fucus.printFn();
debugger
