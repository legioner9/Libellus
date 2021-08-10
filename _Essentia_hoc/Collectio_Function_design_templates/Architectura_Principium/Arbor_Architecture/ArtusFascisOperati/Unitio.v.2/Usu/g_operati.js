'use strict';

const { timer } = require('artus/fascisOperati/g_fascis');

const fn = function(...args) {
  console.dir({ args, this: this });
};
debugger
const fucus = timer(fn).setLimit(3).setTimer(200);
fucus(0);
fucus.printBFn();
setTimeout(() => {
  fucus('primus');
}, 100);

setTimeout(() => {
  fucus('secundus');
}, 500);

