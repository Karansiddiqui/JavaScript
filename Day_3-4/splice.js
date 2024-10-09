// splice -> return new array with shallow copy
// it can change original array
// it can add or remove element from array
// to avoid mutating original array use toSpliced


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newarr = arr.splice(2, 3);
console.log(arr);
console.log(newarr);


let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newarr1 = arr1.splice(2, 3, 100, 200, 300);
console.log(arr1);
console.log(newarr1);
