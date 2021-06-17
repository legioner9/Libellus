'use strict';

function Animal(type) {
  this.type = type;
}

Animal.prototype.print_type = function () {
  console.log(`type: ${this.type}`)
}
Animal.isAnimal = function (obj, type) {
  if (!Animal.prototype.isPrototypeOf(obj)) {
    return false;
  }
  return type ? obj.type === type : true;
};

// Animal: ƒ Animal(type)
//    isAnimal: ƒ (obj, type)
//    prototype:
//      print_type: ƒ ()
//      constructor: ƒ Animal(type)
//      __proto__: Object
//    __proto__: ƒ ()

const an = new Animal('bird')

// an: Animal
//    type: "bird"
//    __proto__:
//      print_type: ƒ ()
//      constructor: ƒ Animal(type)
//        isAnimal: ƒ (obj, type)
//      proto__: ƒ ()
//   __proto__: Object

const bird = Animal.isAnimal(an, 'bird'); // true
const bir = Animal.isAnimal(an, 'bir'); // false

function Dog(name, breed) {
  Animal.call(this, 'dog');
  this.name = name;
  this.breed = breed;
}

Dog.isDog = function (obj) {
  Animal.isAnimal(obj, 'dog');
}

Dog.prototype.print_dog = function () {
  console.log(`[${this.name}, ${this.breed}]`)
}

// Dog: ƒ Dog(name, breed)
//    isDog: ƒ (obj)
//    prototype:
//      print_dog: ƒ ()
//      constructor: ƒ Dog(name, breed)
//      __proto__: Object
//    __proto__: ƒ ()
debugger
Object.setPrototypeOf(Dog.prototype, Animal.prototype);
debugger

// Dog: ƒ Dog(name, breed)
//    prototype: Animal
//      print_dog: ƒ ()
//      constructor: ƒ Dog(name, breed)
//      __proto__:
//        print_type: ƒ ()
//        constructor: ƒ Animal(type)
//        __proto__: Object
//    __proto__: ƒ ()

debugger
const dog = new Dog('bon', 'dvorn');

// dog: Dog
//    breed: "dvorn"
//    name: "bon"
//    type: "dog"
//    __proto__: Animal
//      print_dog: ƒ ()
//      constructor: ƒ Dog(name, breed)
//      __proto__:
//        print_type: ƒ ()
//        constructor: ƒ Animal(type)
//        __proto__: Object
debugger
