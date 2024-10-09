nst obj = {
//     hasOwnProperty: 'This is not a method',
//     name: 'Alice'
// };

// // This will fail because hasOwnProperty is shadowed
// console.log(obj.hasOwnProperty('name')); // TypeError: obj.hasOwnProperty is not a function

// // Using Object.hasOwn() avoids this problem
// console.log(Object.hasOwn(obj, 'name')); // true
