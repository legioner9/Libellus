'use strict';

const stateObject = (...args) => {
  // define closure
  const closure = args;
  // define state
  const state = {
    args,
    closure,
    printThis() {
      console.dir(this);
      // provide chane
      return this;
    },
    printArg() {
      console.dir(this.args);
      // provide chane
      return this;
    }
  };
  // return state
  return state;
};

const state = stateObject('a');
state.printThis().printArg();
debugger
