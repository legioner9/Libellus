'use strict';

const curry = (fn) => (...args) => {
  if (fn.length <= args.length) return fn(...args);
  else return curry(fn.bind(null, ...args));
};
debugger
// reverse args callback last

const timer = (time, fn) => setTimeout(fn, time);
const timer2sec = curry(timer)(2000);
timer2sec(() => console.log('stop after 2 sec'));
console.log('start');

// spread last args error first

const callback = () => {
  // do something with args
}
const callback_args = (err, ...data) => callback(err, data);

