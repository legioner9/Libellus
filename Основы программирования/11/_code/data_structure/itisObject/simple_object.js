'use strict';

const ob = {
  name: 'Marcus',
  age: 41,
  city: 'Rome',
};

const ob_2 = Object.assign({}, ob);// ob === ob_2
const ob_3 = { ...ob };// ob !== ob_3
debugger
