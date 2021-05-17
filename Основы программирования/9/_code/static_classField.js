'use strict';

const Point = class {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static from(x, y) {
    return new Point(x, y);
  }
};

const a = Point.from(3, 5);

debugger
