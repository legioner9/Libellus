'use strict';

const { once } = require('artus/fascisOperati/once');

const fn = function(...args) {
  console.dir({ args, this: this });
};

// Use
debugger
const fucus = once(fn);
fucus('a');// call
fucus('b');// return undefined


debugger
