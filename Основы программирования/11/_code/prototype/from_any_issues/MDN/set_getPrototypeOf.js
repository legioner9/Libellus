'use strict';

const ob = {a: 'a'};
const proto = {b: 'b'};

const obj = Object.setPrototypeOf(ob, proto);
debugger
const isProto = Object.getPrototypeOf(obj) === proto;// true
const is__proto__ = obj.__proto__ === proto;// true

const _isPrototypeOf = function (obj_proto, object) {
  const proto = object.__proto__;
  if (proto !== undefined) {
    if (obj_proto === proto) return true;
    else _isPrototypeOf(obj_proto, proto);
  }
  return false;
}

debugger
const ipo = _isPrototypeOf(proto, obj);
