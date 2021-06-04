'use strict';

function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, 'set');
  _classApplyDescriptorSet(receiver, descriptor, value);
  return value;
}

function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if ( !privateMap.has(receiver)) { throw new TypeError('attempted to ' + action + ' private field on non-instance'); }
  return privateMap.get(receiver);
}

function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set) { descriptor.set.call(receiver, value); } else {
    if ( !descriptor.writable) { throw new TypeError('attempted to set read only private field'); }
    descriptor.value = value;
  }
}

var _a = /*#__PURE__*/new WeakMap();

class Fab {
  constructor(a = '') {
    _a.set(this, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _a, a);
  }

}

const ob = new Fab();
