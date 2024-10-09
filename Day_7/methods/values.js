//The Object.keys() static method returns an array of a given object's own enumerable string-keyed property values.


const person = {
    name: "John",
    age: 30
};

const values = Object.values(person);

console.log(values)