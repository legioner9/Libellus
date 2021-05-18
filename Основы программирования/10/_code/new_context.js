'use strict';

const Context = function() {
  this.name = 'Marcus';//private field for f2 !!!
  const city = {
    name: 'Kiev',
    year: 482,
    f1: function() {
      debugger
      return this.name;
      // this: Object
      // f1: ƒ ()
      // f2: () => { debugger return this.name; }
      // f3: ƒ f3()
      // name: "Kiev"
      // year: 482
    },
    f2: () => {
      debugger
      return this.name;
      // this: Context
      // name: "Marcus"
    },
    f3() {
      debugger
      return this.name;
      // this: Object
      // f1: ƒ ()
      // f2: () => { debugger return this.name; }
      // f3: ƒ f3()
      // name: "Kiev"
      // year: 482
    },
  };
  return city;
};

const c = new Context();
debugger

const c1 = c.f1();
const c2 = c.f2();
const c3 = c.f3();
// c1: "Kiev"
// c2: "Marcus"
// c3: "Kiev"
