// primitive data types
// 1. number
// 2. string
// 3. boolean
// 4. undefined
// 5. null
// 6. symbol
// 7. bigint

// non-primitive data types
// 1. array
// 2. object

// dynamic typing

let x = 10; // x is a number
console.log(typeof x); //type is number

x = "hello"; // x is a string
console.log(typeof x); // type is string

x = null; // x is a null   // it refers to absence of object
console.log(typeof x); // type is object

x = undefined; // x is a undefined
console.log(typeof x); // type is undefined

x = true; // x is a boolean
console.log(typeof x); // type is boolean

x = {}; // x is a object
console.log(typeof x); // type is object

x = []; // x is a array
console.log(typeof x); // type is array

console.log("\n-----------------------------------\n");

// loops

// for -> used when we know the number of iterations
// for each
// map  -> it returns an new array
// while -> used when we don't know the number of iterations
// do while -> it run atleast once
// for in -> iterates over the enumarable properties of an object
// enumerable -> This flag indicates whether the property will show up in certain object property enumerations, such as for...\nin loops or Object.keys().
// for of -> it returns the value
// for await

// for
console.log("For loop ...\n");
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log("\n-----------------------------------\n");

// for each
console.log("Foreach loop ...\n");

arr.forEach((element) => {
  console.log(element);
});

console.log("\n-----------------------------------\n");

// for each
console.log("map ...\n");

let arr2 = arr.map((element) => {
  return element * 2;
});
console.log(arr2);

console.log("\n-----------------------------------\n");

// while
console.log("wHILE LOOP ...\n");

let i;

while (i != 4) {
  i = Math.floor(Math.random() * 10);
  console.log(i);
}

console.log("\n-----------------------------------\n");

// do while

console.log("do while ...\n");

i = 0;

do {
  console.log(arr[i]);
  i++;
} while (i < arr.length);

console.log("\n-----------------------------------\n");

// for in

console.log("for in ...\n");

for (let index in arr) {
  console.log(arr[index]);
}

// for in

console.log("\n-----------------------------------\n");

// for of

console.log("for of ...\n");

for (let value of arr) {
  console.log(value);
}


console.log("\n-----------------------------------\n");


// conditional statements

// if
// if else
// if else if
// switch case
// ternary operator
// break
// continue


// if 

console.log("if ...\n");

let num = 10;

if (num > 0) {
  console.log("positive");
}

console.log("\n-----------------------------------\n");

// if else

console.log("if else ...\n");

num = -10;

if (num > 0) {
  console.log("positive");
} else {
  console.log("negative");
}

console.log("\n-----------------------------------\n");

// if else if

console.log("if else if ...\n");

num = 0;

if (num > 0) {
  console.log("positive");
} else if (num < 0) {
  console.log("negative");
} else {
  console.log("zero");
}

console.log("\n-----------------------------------\n");

// switch case

console.log("switch case ...\n");

switch (num) {
  case 0:
    console.log("zero");
    break;
  case 1:
    console.log("one");
    break;
  case 2:
    console.log("two");
    break;
  default:
    console.log("other");
    break;
}

console.log("\n-----------------------------------\n");

// ternary operator

console.log("ternary operator ...\n");

let result = num > 0 ? "positive" : "negative";
console.log(result);

console.log("\n-----------------------------------\n");

// break

console.log("break ...\n");

for (let index = 0; index < arr.length; index++) {
  if (arr[index] == 3) {
    break;
  }
  console.log(arr[index]);
}

console.log("\n-----------------------------------\n");

// continue

console.log("continue ...\n");

for (let index = 0; index < arr.length; index++) {
  if (arr[index] == 3) {
    continue;
  }
  console.log(arr[index]);
}

console.log("\n-----------------------------------\n");