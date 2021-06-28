'use strict';

const templateFromString = (words, ...variables) => ({
  words, variables
});

const createFromTemplate = (template) => {
  return String.raw(template.words, ...template.variables);
};

const str = `read me ${3 * 4} `;

const structure = templateFromString`read me ${3 * 4} `;
const reConstruct = createFromTemplate(structure);

//structure:
// variables: Array(1)
// 0: 12
// length: 1
// words: Array(2)
// 0: "read me "
// 1: " "
// length: 2
// raw: (2) ["read me ", " "]

console.log('str === reConstruct: ', str === reConstruct);
debugger
