// Create an object called person with name = John, age = 50.
// Then, access the object to alert("John is 50").

// Using Object Literal Notation
// it is for single user creation
const person = {
  name: "John",
  age: 50,
};
// alert(`${person.name} is ${person.age}`);
console.log("using object literal : ", `${person.name} is ${person.age}`);

// using constructor function
function userDefine(name, age) {
  this.name = name;
  this.age = age;
  //   console.log("using constructor function : ",`${this.name} is ${this.age}!`);
}
function user(name, age) {
  userDefine.call(this, name, age);
}
const person1 = new user("John", 50);
console.log(
  "using constructor function : ",
  `${person1.name} is ${person1.age}`
);
// alert(person.nam e + " is " + person.age);

// using constructor function and create method
// create method is used in inheritance of prototype methods and used to create new object as prototype
// it create deep copy of prototype method
function userDefine1(name, age) {
  this.name = name;
  this.age = age;
}

function user1(name, age) {
  userDefine1.call(this, name, age);
}
userDefine1.prototype.alert = function () {
  return `Using constructor function and create method : ${this.name} is ${this.age}!`;
};

user1.prototype = Object.create(userDefine1.prototype);
user1.prototype.constructor = user1;

const person2 = new user1("John", 50);
console.log(person2.alert());

// alert(person2.alert());
