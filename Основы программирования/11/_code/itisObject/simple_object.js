'use strict';

const ob = {
  name: 'Marcus',
  age: 41,
  city: 'Rome',
};

const ob_2 = Object.assign({}, ob);// ob === ob_2
const ob_3 = { ...ob };// ob !== ob_3
debugger

const ob_4 = {
  name: 'Marcus',
  get city() {
    return 'Roma';
  },
  set city(x) {
    console.log('Marcus remane in Rome');
  }
};

delete ob_4.city;

const i_f = 'name' in ob_4;
for (const key in ob) {
  console.log(ob[key]);
}

const fs = s => s + 'Born';

const ob_5 = { // ob_5: {cityBorn: "MarcusBorn"}
  [fs('city')]:fs('Marcus'),
};
debugger
