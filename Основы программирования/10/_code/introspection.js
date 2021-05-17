'use strict';

const a = function() {
  console.log(1);
};

const introspection = {
  la: a.length,
  na: a.name,
  sa: a.toString(),
};

debugger
