// entries -> The entries() method of Array instances returns a new array iterator
//  object that contains the key/value pairs for each index in the array.


// it confirms to iterable protocal by providing next method to iterable object

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const entries = arr.entries();
// console.log(entries.next());
// console.log(entries.next());
// console.log(entries.next());
// console.log(entries.next());
// console.log(entries.next());

for (const key of entries) {
    console.log(key);
  }