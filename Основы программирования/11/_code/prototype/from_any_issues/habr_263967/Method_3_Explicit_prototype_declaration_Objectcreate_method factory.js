'use strict';

const Animal = {
  create(type) {
    const animal = Object.create(this.prototype);
    animal.type = type;
    return animal;
  },
  isType(obj, type) {
    if (!this.prototype.isPrototypeOf(obj)) {
      return false;
    }
    return type ? obj.type === type : true;
  },
  prototype: {
    print_type() {
      console.log(`type: ${this.type}`);
    },
  }
}
debugger
const an = Animal.create('pet');
const tp = Animal.isType(an);

const Dog = {
  create(name, breed) {
    const proto = Object.assign(Animal.create("dog"), this.prototype);
    const dog = Object.create(proto);
    dog.name = name;
    return dog;
  },
  isDog(obj) {
    return Animal.isType(obj, 'Dog');
  },
  prototype: {
    print_dog() {
      console.log(`name: ${this.name}`);
    },
  }
};

debugger
const dog = Dog.create('bon', 'dvorn');
