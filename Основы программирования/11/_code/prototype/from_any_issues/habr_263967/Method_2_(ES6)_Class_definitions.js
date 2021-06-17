'use strict';

class Animal {
  constructor(type) {
    this.type = type;
  }

  static isAnimal(obj, type) {
    if (!Animal.isPrototypeOf(obj)) {
      return false;
    }
    return type === obj.type;
  }

  print_type(obj) {
    console.log(`type: ${this.type}`)
  }
}

const an = new Animal('pet');

class Dog extends Animal {
  constructor(name, breed) {
    super('dog');
    this.name = name;
    this.breed = breed;
  }

  static isDog(obj) {
    Animal.isAnimal(obj, 'dog');
  }

  print_dog(obj) {
    console.log(`name: ${this.name}, breed: ${this.breed}`);
  }
}

const dog = new Dog('bon', 'dvorn');
debugger
