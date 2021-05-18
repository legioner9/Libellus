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
    },
  };
};

const cf = new c('ave');
// cf: {f: ƒ}
cf.f();

const d = function(x = '') {
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

const dd = d('ave');
dd();// dd: () => {…}

debugger
