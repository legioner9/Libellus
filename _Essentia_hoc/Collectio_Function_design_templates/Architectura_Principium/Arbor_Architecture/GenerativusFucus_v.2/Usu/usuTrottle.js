'use strict';

const { trottle } = require('artus/fascisOperati/trottle');

const fn = function(...args) {
  console.dir({ args, this: this });
};
