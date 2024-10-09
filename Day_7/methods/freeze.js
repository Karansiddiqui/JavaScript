// freeze -> freeze all properties and methods frozen
// The Object.freeze() static method freezes an object.
// Freezing an object prevents extensions and
// makes existing properties non-writable and
//  non-configurable. A frozen object can no longer be changed: new properties cannot be added,
// existing properties cannot be removed, their enumerability, configurability, writability, or
// value cannot be changed, and the object's prototype cannot be re-assigned.
// freeze() returns the same object that was passed in.

const person = {
  name: "John",
  age: 30,
};

Object.freeze(person);

person.name = "Jane";
console.log(person);
