// join -> return a string by joining all elements of an array

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr.join("-"));

const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 5, // ignored by join() since length is 3
};

console.log(Array.prototype.join.call(arrayLike));
// 2,3,4
console.log(Array.prototype.join.call(arrayLike, "."));
// 2.3.4
