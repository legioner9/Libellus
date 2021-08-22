'use strict';

const { timer } = require('artus/fascisOperati/g_fascis');
const { memoizeAsync } = require('artus/fascisOperati/i_fascis');

const fn = (x, callback) => {
  if (typeof x !== 'number') callback('argument is not a number');
  callback(null, x);
};
const callback = (...args) => args;

const add = (...data) => {
  console.log('event add called with: ', data);
};

const mfn = memoizeAsync(fn).setLengthCache(3).onEventCache('add', add);

const fucus = timer(mfn).setLimit(2).setTimer(1200);
fucus(0);
fucus.printFn();
debugger
setTimeout(() => {
  fucus('primus');
}, 100);

setTimeout(() => {
  fucus('secundus');
}, 500);

