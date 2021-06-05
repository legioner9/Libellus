'use strict';

const ob = {
  a: 1,
  what_a() {
    console.log(`a = ${this.a} from ob`);
  }
};

const child_ob = Object.create(ob, { b: { value: '' } });
//child_ob:
// b: ""
// __proto__:
// a: 1
// what_a: ƒ what_a()
// __proto__: Object
console.log(child_ob.a);// 1

// function getPropertyProto(obj, prop) {
//   if (obj.hasOwnProperty(prop))
//     return obj[prop];
//
//   else if (obj.__proto__ !== null)
//     return getPropertyProto(obj.__proto__, prop);
//
//   else
//     return undefined;
// }

function getPropertyProto(ob, prop) {
  if (ob.hasOwnProperty(prop)) return ob[prop];
  else if (ob.__proto__ !== null) return getPropertyProto(ob.__proto__, prop);
  return undefined;
}

debugger
getPropertyProto(child_ob, 'a');
// 1
getPropertyProto(child_ob, 'what_a');
// ƒ what_a() {
//     console.log(`a = ${this.a} from ob`);
//   }

debugger
