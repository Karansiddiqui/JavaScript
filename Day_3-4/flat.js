// flat -> return new array after flattening

const arr1 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr1.flat());

console.log(arr1.flat(2));

console.log(arr1.flat(Infinity));
