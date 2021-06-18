'use strict';

function Animal(type) {
  const animal = Object.create(Animal.prototype);
  animal.type = type;
  return animal;
}

Animal.isType = function (obj, type) {
  if (!Animal.prototype.isPrototypeOf(obj)) return false;
  return type ? obj.type === type : false;
}

Animal.prototype = {
  print_type() {
    console.log(`type: ${this.type}`);
  }
}

const an = Animal('pet');
const tp = Animal.isType(an, 'pet');
an.print_type();
const a_iof = an instanceof Animal;
const a_isp = Animal.prototype.isPrototypeOf(an)

function Dog(name) {
  const proto = Object.assign(Animal('pet'), Dog.prototype);
  const dog = Object.create(proto);
  dog.name = name;
  return dog;
}

Dog.isDogName = function (obj, name) {
  if (!Dog.prototype.isPrototypeOf(obj)) return false;
  return name ? obj.name === name : true;
}

Dog.prototype = {
  print_name() {
    console.log(`name: ${this.name}`)
  }
}
debugger
const dg = Dog('bon');
const nm = Dog.isDogName(dg, 'bon');
dg.print_name();

const iof = dg instanceof Dog
const isp = Dog.prototype.isPrototypeOf(dg);
