'use strict';

const { extend } = require('artus.v.2/fascisOperati/extend');

// Use

const fn = function(...args) {
  console.dir({ args, this: this });
};
debugger
const fucus = extend(fn).limit(3).timer(200);
fucus('a');
console.dir(fucus.closureForFn.flags.kill);
fucus.cancel();
fucus('b');
console.dir(fucus.closureForFn.flags.kill);
fucus.resume();
fucus('c');
console.dir(fucus.closureForFn.flags.kill);


debugger
