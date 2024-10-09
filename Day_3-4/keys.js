// keys -> The keys() method of Array instances returns a new array iterator object that contains the keys for each index in the array.


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const keys = arr.keys();

console.log(keys.next());
console.log(keys.next());

for (const key of keys) {
    console.log(key);
  }