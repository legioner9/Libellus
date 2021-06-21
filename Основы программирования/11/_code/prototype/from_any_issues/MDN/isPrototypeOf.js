'use strict';

debugger

function F1() {
  this.a = 1;
}

function F2() {
  this.b = 1;
}
F2.prototype = new F1();

function F3() {
  this.c = 1;
}
F3.prototype = new F2();

function F4() {
  this.d = 1;
}
F4.prototype = new F3();

const f4 = new F4();
// ...

if (F2.prototype.isPrototypeOf(f4)) {
  // здесь безопасно что-то делать
}


