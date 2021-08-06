'use strict';

const { trottle } = require('artus.v.2/fascisOperati/trottle');

const fn = function(...args) {
  console.dir({ args, this: this });
};
