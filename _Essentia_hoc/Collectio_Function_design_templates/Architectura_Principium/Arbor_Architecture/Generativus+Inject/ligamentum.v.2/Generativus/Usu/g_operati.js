'use strict';

const { timer } = require('artus.v.2/fascisOperati/g_fascis');

const fn = function(...args) {
  console.dir({ args, this: this });
};

const fucus = timer(fn).limit(2).timer(1200);
fucus(0);
setTimeout(() => {
  fucus('primus');
}, 100);

setTimeout(() => {
  fucus('secundus');
}, 500);

