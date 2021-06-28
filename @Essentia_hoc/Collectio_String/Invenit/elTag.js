'use strict';



const tag = (string, ...values) => {
  console.log(string, values);
};

const str = 'Sub , srings that )))';

console.dir({ str });
tag`${str}`;


