// let array = [12, 13, 14, 12, 13, 14, 12, 13, 14, 15, 99, 128];

// Task 1 → Write a program to check if the above array contains 14. Returned value must be a boolean.

// Task 2 → Write a program to check if every element in the array is above 80 or not. Returned value must be a boolean.

let array = [12, 13, 14, 12, 13, 14, 12, 13, 14, 15, 99, 128];

console.log(array.some((e) => {
    return e === 14;
}));

console.log(array.every((e) => {
    return e > 80;
}));