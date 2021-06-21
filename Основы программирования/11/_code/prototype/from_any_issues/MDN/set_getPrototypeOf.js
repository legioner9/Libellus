'use strict';

const ob = {a: 'a'};
const proto = {b: 'b'};

const obj = Object.setPrototypeOf(ob, proto);
debugger
const isProto = Object.getPrototypeOf(obj) === proto;// true
const is__proto__ = obj.__proto__ === proto;// true

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

debugger
const _ipo = _isPrototypeOf(proto, obj);
const ipo = obj.prototype.isPrototypeOf(proto);
