// The Object.is() static method determines whether two values are the same value.


console.log(Object.is(0, -0)); // false
console.log(Object.is(-0, 0)); // false
console.log(Object.is(0, 0)); // true
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(1, 1)); // true
console.log(Object.is(1, '1')); // false