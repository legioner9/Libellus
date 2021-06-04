'use strict';

debugger
const Ob = function(a = 0) {
  this.a = a;
};

Ob.prototype.add_a = function(d) {
  this.a += d;
};

const ob = new Ob();
// ob: Ob
// a: 0
//   __proto__:
//   add_a: ƒ (d)
//   constructor: ƒ (a = 0)
//     arguments: (...)
//     caller: (...)
//     length: 0
//     name: "Ob"
