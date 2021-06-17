'use strict';

const MyClass = {
  prototype: {
    // prototypal members and methods
  },
  create: function (options) {
    // do stuff with options
    return Object.create(MyClass.prototype, options);
  }
};
