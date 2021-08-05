'use strict';

const { main } = require('artus/fascisOperati/main');

const fn = function(...args) {
  console.dir({ args, this: this });
};
