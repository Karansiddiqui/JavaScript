// map -> return new array formed by applying a given callback function to each element of the array 

const arr = [1, 2, 3, 4];

let newArr = arr.map((x) => {
    return x * 2;
});

console.log(newArr)