'use strict';

const double_nesting_lambda = (fn) => (x) => 1 / fn(x);

// Using
const fix_fn = double_nesting_lambda((a) => a);
const using_fix_fn = fix_fn(2);
