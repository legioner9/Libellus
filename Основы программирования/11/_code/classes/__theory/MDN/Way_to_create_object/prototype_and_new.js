'use strict';

debugger
const Ob = function(a = 0) {
  this.a = a;
};

Ob.prototype.add_a = function(d) {
  this.a += d;
};

const ob = new Ob();
