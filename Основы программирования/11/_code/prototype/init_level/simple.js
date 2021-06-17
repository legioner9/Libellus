'use strict';

function Point(x, y) {
  this.x = x;
  this.y = y;
  this.move = function(dx, dy) {
    this.x += dx;
    this.y += dy;
  };
}

const p = new Point(1, 4);
//p: Point
// move: ƒ (dx, dy)
// x: 1
// y: 4
debugger
