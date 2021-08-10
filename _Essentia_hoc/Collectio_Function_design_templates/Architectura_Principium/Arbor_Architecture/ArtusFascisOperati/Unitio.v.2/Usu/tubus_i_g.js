'use strict';

const { timer } = require('artus/fascisOperati/g_fascis');
const { memoizeAsync } = require('artus/fascisOperati/i_fascis');

const fn = (x, callback) => {
  if (typeof x !== 'number') callback('argument is not a number');
  else callback(null, x);
};
const callback = (...args) => console.log (args);
const add = (...data) => {
  console.log('event add called with: ', data);
};
debugger

const t_fucus = timer(fn)//.setLimit(2).setTimer(1200);
const a_t_fucus = memoizeAsync(t_fucus)//.setLengthCache(3).onEventCache('add', add);
debugger

a_t_fucus(0, callback);
setTimeout(() => {
  a_t_fucus(1, callback);
  debugger
  a_t_fucus.clearCache();
  debugger
  a_t_fucus(1, callback);
  a_t_fucus(1, callback);
  debugger
  a_t_fucus(2, callback);
  a_t_fucus(3, callback);
  a_t_fucus(4, callback);
  a_t_fucus('primus', callback);
}, 100);

setTimeout(() => {
  a_t_fucus('secundus', callback);
}, 500);

