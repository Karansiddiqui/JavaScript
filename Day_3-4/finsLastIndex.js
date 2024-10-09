// findLastIndex -> return the index of last occurance of element in array
// The findLastIndex() method of Array instances iterates the array in reverse order and
//  returns the index of the first element that satisfies the provided testing function.
//  If no elements satisfy the testing function, -1 is returned.


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr.findLastIndex((element) => {
    return element > 6;
}))