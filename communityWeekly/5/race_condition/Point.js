'use strict';

const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const add = (v, dv) => new Promise(resolve => {
  setTimeout(() => {
    resolve(v + dv);
  }, random(10, 200));
});

const Point = class {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  async move(dx, dy) {
    this.x = await add(this.x, dx);
    this.y = await add(this.y, dy);
    console.log(`x = ${this.x} , y = ${this.y}`);
  }

  console() {
    console.log(`x = ${this.x} , y = ${this.y}`);
  }

};

const v = new Point(1, 1);

v.move(2, 2);
v.move(3, 3);
v.move(4, 4);
v.move(5, 5);

