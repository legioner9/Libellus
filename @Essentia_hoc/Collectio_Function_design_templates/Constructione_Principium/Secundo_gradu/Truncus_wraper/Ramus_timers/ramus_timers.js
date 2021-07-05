'use strict';

const wrapTimer = (msec, fn) => {
  console.log(`wrap: ${fn} with timeout: ${msec}`);
  return (...args) => {
    setTimeout(() => fn(...args), msec);
  };
};

const fn = (...args) => console.dir(args);

const fn100 = wrapTimer(5000, fn);

fn100('primum');

