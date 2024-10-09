// Object.assign -> used to create copy of objects

const person1 = { name: "John", age: { year: 30, month: 2 } };
const person2 = { city: "New York" };

// it affect person1 object
// const mergedPerson = Object.assign(person1, person2);

// it create new object with merged , it create deep copy
const mergedPerson1 = Object.assign({}, person1, person2);

// console.log(mergedPerson); // Output: { name: 'John', age: 30, city: 'New York' }
mergedPerson1.age.year = 20;
console.log("MergePerson1", mergedPerson1); // Output: { name: 'John', age: 30, city: 'New York' }
console.log("Person", person1);
// alt for deep copy

// structuredClone -> used to deep opy only one object
const mergedPerson2 = structuredClone(mergedPerson1);
mergedPerson2.age.year = 21;
console.log("MergePerson2", mergedPerson2);

console.log("person1", person1);
