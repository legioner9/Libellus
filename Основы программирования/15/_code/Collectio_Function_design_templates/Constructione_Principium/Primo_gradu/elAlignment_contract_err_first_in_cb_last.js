'use strict';

const Fs = require('fs');

const path_ = 'callback_3_args_fs.js';
const encoding = 'utf8';
const fn = (data) => console.log(data);

const curry = (fn) => (...args) => {
  if (fn.length <= args.length) return fn(...args);
  else return curry(fn.bind(null, ...args));
};

// reverse args callback last

const timer = (time, fn) => setTimeout(fn, time);

// spread last args error first

const callback = () => {
  // do something with args
}
const callback_args = (err, ...data) => callback(err, data);

