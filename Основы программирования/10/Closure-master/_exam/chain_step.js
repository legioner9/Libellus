'use strict';

const seq = (f) => (g) => (typeof g === 'number' ? f(g) : seq((x) => f(g(x))));
const f1 = d => d + 2;
const f2 = d => d * 2;
const f3 = d => d / 2;

debugger
const s = seq(f1)(f2)(f3)(4);

module.exports = { seq };
