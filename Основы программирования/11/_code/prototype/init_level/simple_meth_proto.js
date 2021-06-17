'use strict';

function Point(x, y) {
  this.x = x;
  this.y = y;
  this.move_obj = function(dx, dy) {
    this.x += dx;
    this.y += dy;
  };
}

Point.prototype.move_proto = function(dx,dy){
  this.x += dx;
  this.y += dy;
}

const p = new Point(1, 4);
//p: Point
// move_obj: ƒ (dx, dy)
// x: 1
// y: 4
// __proto__:
// move_proto: ƒ (dx,dy)
// constructor: ƒ Point(x, y)
debugger
