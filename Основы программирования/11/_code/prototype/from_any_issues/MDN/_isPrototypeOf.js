'use strict';

const _isPrototypeOf = function (obj_proto, object) {
  try {
    const proto = object.__proto__;
    if (obj_proto === proto) return true;
    else _isPrototypeOf(obj_proto, proto.__proto__);
  } catch (e) {
    console.log(e.message);
  }
  return false;
}

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
debugger
const _isp = _isPrototypeOf(F1.prototype, f4);
const isp = F1.prototype.isPrototypeOf(f4);
