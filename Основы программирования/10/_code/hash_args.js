'use strict';


const f = (args = {}) => {
  args.a = args.a || 'is?';// not equivalent false!!!
  args.b = args.b || {};

  debugger
  console.dir(args);
};

f({ a: 'yes' });
//args:
// a: "yes"
// b: {}

f({ b: { c: 'c' } });
//args:
// a: "is?"
// b: {c: "c"}
