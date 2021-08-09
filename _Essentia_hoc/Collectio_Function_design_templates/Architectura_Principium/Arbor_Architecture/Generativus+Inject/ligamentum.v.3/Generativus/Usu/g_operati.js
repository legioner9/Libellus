'use strict';

const { timer } = require('artus.v.2/fascisOperati/g_fascis');

const fn = function(...args) {
  console.dir({ args, this: this });
};
debugger
const fucus = timer(fn).setLimit(2).setTimer(1200);
fucus(0);
fucus.printBFn();
setTimeout(() => {
  fucus('primus');
}, 100);

setTimeout(() => {
  fucus('secundus');
}, 500);

