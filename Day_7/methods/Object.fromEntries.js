// Object.fromEntries -> used to create object from list of key value pairs

const entries = [
    ["name", "John"],
    ["age", 30],
];

const obj = Object.fromEntries(entries);

console.log(obj)

const person = new Map([
    ["name", "John"],
    ["age", 30],
]);


const obj1 = Object.fromEntries(person);
obj1.name = "Rohan"
console.log(obj1)
console.log(person);
