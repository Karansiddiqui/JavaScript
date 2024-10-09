// used to create multiple object who have same properties and methods

function createPerson(name, age){
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log(`Hello, my name is ${this.name}!`);
  }
};

const person1 = new createPerson("John", 30);

person1.greet();

const person2 = new createPerson("Alice", 25);

person2.greet();