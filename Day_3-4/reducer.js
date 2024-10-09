// reducer -> it has two parameterS
// accumulator and current value
// current Value -> given value from array
// accumulator -> current value after performing some calculation


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum)