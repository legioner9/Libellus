'use strict';

const fab = (closure = { x: 0, y: 0 }) => {
  let x = closure.x;
  let y = closure.y;
  return {
    move(dx, dy) {
      x += dx;
      y += dy;
    },
    toString() {
      return `x = ${x}, y = ${y}`;
    }
  };
};

const p = fab();
p.move(1, 3);
debugger
