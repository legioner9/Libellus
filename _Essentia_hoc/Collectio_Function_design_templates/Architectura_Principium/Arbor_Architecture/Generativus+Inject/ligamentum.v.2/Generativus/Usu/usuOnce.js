'use strict';

const { once } = require('artus.v.2/fascisOperati/once');

const fn = function(...args) {
  console.dir({ args, this: this });
};

// Use
debugger
const fucus = once(fn);
fucus('a');// call
fucus('b');// return undefined


debugger
