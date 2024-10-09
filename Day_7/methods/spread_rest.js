// The spread syntax is used to expand or spread elements of an iterable 
// (like an array or an object) into individual elements. It is often used in function calls or 
// when creating new arrays or objects.

const nums = [1, 2, 3];
const moreNums = [...nums, 4, 5]; // Spread nums into a new array
console.log(moreNums); // Output: [1, 2, 3, 4, 5]

// Using spread with function calls
function multiply(x, y, z) {
    return x * y * z;
}

const values = [2, 3, 4];
console.log(multiply(...values)); // Output: 24


// The rest syntax is used to collect all remaining elements into an array. ]
// It is typically used in function parameters to allow a function to accept an indefinite number of arguments.

function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(10, 20, 30, 40)); // Output: 100


// spread and rest together

function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
const numbers = [1, 2, 3];
console.log(sum(...numbers));