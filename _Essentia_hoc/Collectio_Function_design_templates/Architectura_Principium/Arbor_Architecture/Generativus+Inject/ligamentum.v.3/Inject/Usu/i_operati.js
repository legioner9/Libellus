'use strict';

const  memoizeAsync  = require('artus.v.2/fascisOperati/i_fascis');

// memoizeAsync.lengthCache(3);

const fn = (x, callback) => {
  if (typeof x !== 'number') callback('argument is not a number');
  callback(null, x);
};
const callback = (...args) => args;

const mfn = memoizeAsync(fn);

const is = mfn.setLengthCache(3);

mfn.on('add', (...data) => {
  console.log('event add called with: ', data);
});
// mfn.addPrototypes(objProto);

mfn(1, callback);
debugger
mfn.clear();
debugger
mfn(1, callback);
mfn(1, callback);
debugger
mfn(2, callback);
mfn(3, callback);
mfn(4, callback);
debugger
