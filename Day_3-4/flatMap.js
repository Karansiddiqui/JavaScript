// flatMap -> return new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1 


const arr = [1, 2, 3, 4];

let  flat = arr.flatMap((x) => [x, x * 2]);

console.log(flat);