// hasOwn and hasOwnProperty have the same behavior
// but hasOwnProperty is a instance method
// means if you are working with an object and create new instance of that then you can use

// hasOwn is a static method work on directly object

// hasOwn is more stable and more perform then hasOWnProperty

// conflict with hasOwnProperty

const obj = {
  hasOwnProperty: "This is not a method",
  name: "Alice",
};

// This will fail because hasOwnProperty is shadowed
console.log(obj.hasOwnProperty("name")); // TypeError: obj.hasOwnProperty is not a function

// Using Object.hasOwn() avoids this problem
console.log(Object.hasOwn(obj, "name")); // true

// const obj = {
//     hasOwnProperty: 'This is not a method',
//     name: 'Alice'
// };

// // This will fail because hasOwnProperty is shadowed
// console.log(obj.hasOwnProperty('name')); // TypeError: obj.hasOwnProperty is not a function

// // Using Object.hasOwn() avoids this problem
// console.log(Object.hasOwn(obj, 'name')); // true
