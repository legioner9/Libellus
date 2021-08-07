'use strict';

const { memoizeAsync } = require('artus/fascisOperati/memoizeAsync');

const fn = function(...args) {
  console.dir({ args, this: this });
};
