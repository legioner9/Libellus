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
    }
  };
  // return state
  return state;
};

const state = stateObject('a');
state.printThis();
debugger
