// The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names.


const person = {
    name: "John",
    age: 30
};

const keys = Object.keys(person);

console.log(keys)