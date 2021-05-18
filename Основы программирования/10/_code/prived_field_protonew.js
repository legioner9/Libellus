'use strict';

const c = function(x = '') {
  this.a = x;
  return {
    f: () => {
      const b = this.a;
      debugger
      //Local
      // b: "ave"
      // this: c
      // a: "ave"
    }
  };
};

new c('ave').f();

const d = function(x='') {
  debugger
  const a = x;
  return () => {
    const b = a;
    debugger
    //Local
    // b: "ave"
    // this: undefined
    // Closure (d)
    // a: "ave"
  };
};

d('ave')();
