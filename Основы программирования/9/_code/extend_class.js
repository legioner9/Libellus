'use strict';

const v_2 = class {
  constructor(x, y) {
    debugger
    this.x = x;
    this.y = y;
  }
};

const v_3 = class extends v_2 {
  constructor(x, y, z) {
    super(x, y);
    this.z = z;
  }
};

const p_3 = new v_3(2, 3, 4);
