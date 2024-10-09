// findLast -> return last element that satisfies the condition
// The findLast() method of Array instances iterates the array in reverse order and
//  returns the value of the first element that satisfies the provided testing function. 
// If no elements satisfy the testing function, undefined is returned.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(
  arr.findLast((element) => {
    return element > 6;
  })
);
