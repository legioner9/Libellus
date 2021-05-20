'use strict';

const o = [
  { species: 'lyon', name: 'king' },
  { species: 'cat', name: 'kiss' },
];

for (let i = 0; i < o.length; i++) {
  (function(i) {
    debugger
    // Local
    // i: 0
    // this: Object
    // name: "king"
    // species: "lyon"
  }).call(o[i], i);

}
