'use strict';

if (!Object.prototype.parseString)  {
  Object.prototype.parseString = function(words, ...variables) {
    return {
      words, variables
    };
  };
}
if (!Object.prototype.stringifyObject) {
  Object.prototype.stringifyObject = function() {
    return String.raw(this.words, ...this.variables);
  };
}
const str = `read me ${3 * 4} `;

const structure = Object.prototype.parseString`read me ${3 * 4} `;

const reConstruct = structure.stringifyObject();

//structure:
// variables: Array(1)
// 0: 12
// length: 1
// words: Array(2)
// 0: "read me "
// 1: " "
// length: 2
// raw: (2) ["read me ", " "]

console.log('str === reConstruct: ', str === reConstruct); //true

debugger
