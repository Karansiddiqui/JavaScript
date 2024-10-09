// vlaue -> The values() method of Array instances returns a new array iterator object that iterates the value of each item in the array.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const values = arr.values();

console.log(values.next());
console.log(values.next());

for (const value of values) {
  console.log(value);
}