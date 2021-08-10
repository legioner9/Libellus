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
debugger

const t_fucus = timer(fn).setLimit(2).setTimer(1200);
debugger
t_fucus(0, callback);
t_fucus.printBFn();
setTimeout(() => {
  t_fucus('primus', callback);
}, 100);

setTimeout(() => {
  t_fucus('secundus', callback);
}, 500);

