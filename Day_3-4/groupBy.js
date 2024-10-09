// groupBy -> group elements of an array based on the result of a callback function

const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];


// const groupBy = (array, callback) => {
//   const result = {};
//   for (let i = 0; i < array.length; i++) {
//     const key = callback(array[i]);
//     if (!result[key]) {
//       result[key] = [];
//     }
//     result[key].push(array[i]);
//   }
//   return result;
// };

console.log(Object.groupBy(inventory, (item) => item.type));