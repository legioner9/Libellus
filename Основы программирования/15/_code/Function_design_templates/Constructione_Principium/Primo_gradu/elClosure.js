'use strict';

const fn = obj_closure => inner_args => {
  // modify obj_closure - closure block
  let state = obj_closure;
  // using inner_args - main_function block
  let modified_args = inner_args;
  return { state, modified_args };
};

// Using
const fn_closure = fn({ closure: 'closure' });
const fn_closure_args = fn_closure('args');

