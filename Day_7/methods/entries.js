// The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.


const person = {
    name: "John",
    age: 30
};

const entries = Object.entries(person);

console.log(entries)