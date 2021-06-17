'use strict';

debugger
function Rect(x, y, width, heght) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.hegth = heght;
}

Rect.prototype.toString = function () {
  return `[${this.x}, ${this.y}, ${this.width},${this.hegth}]`
}

// Rect: ƒ Rect(x, y, width, heght)
//    arguments: (...)
//    caller: (...)
//    length: 4
//    name: "Rect"
//    prototype:
//      toString: ƒ ()
//      constructor: ƒ Rect(x, y, width, heght)
//      __proto__: Object

function Square(x, y, side) {
  Rect.call(this, x, y, side, side);
}

// Square: ƒ Square(x, y, side)
//    arguments: (...)
//    caller: (...)
//    length: 3
//    name: "Square"
//    prototype:
//      constructor: ƒ Square(x, y, side)
//      __proto__: Object

Object.setPrototypeOf(Square.prototype, Rect.prototype);

// Square: ƒ Square(x, y, side)
//    arguments: (...)
//    caller: (...)
//    length: 3
//    name: "Square"
//    prototype: Rect
//      constructor: ƒ Square(x, y, side)
//      __proto__:
//        toString: ƒ ()
//        constructor: ƒ Rect(x, y, width, heght)
//        __proto__: Object

const sq = new Square(3, 6, 23);

// sq: Square
//    hegth: 23
//    width: 23
//    x: 3
//    y: 6
//    __proto__: Rect
//      constructor: ƒ Square(x, y, side)
//      __proto__:
//        toString: ƒ ()
//        constructor: ƒ Rect(x, y, width, heght)
//        __proto__: Object

debugger
