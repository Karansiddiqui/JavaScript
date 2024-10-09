// Write a JavaScript function that accepts a string as a parameter and:

// 1. Converts the first letter of string in upper case

// 2. Remove any whitespaces from the string start or the end

// Example
// For "this is Test "; Print "This is Test"
// For "   hello a"; Print "Hello a"
// Input: str
// Output: Converts the first letter of string in upper case and remove spaces
// Must only use string methods for the activity, which may include:

// charAt
// slice
// concat

function capitalizeFirstLetterAndRemoveWhiteSpaces(str) {
  const firstUpperCase =  str.trim().charAt(0).toUpperCase();
  const remaining = str.trim().slice(1)
  return firstUpperCase.concat(remaining)
  
}
console.log(capitalizeFirstLetterAndRemoveWhiteSpaces("hello world"));

console.log(capitalizeFirstLetterAndRemoveWhiteSpaces("   hello a"));

console.log(capitalizeFirstLetterAndRemoveWhiteSpaces("this is Test "));

console.log(capitalizeFirstLetterAndRemoveWhiteSpaces("   this is Test   "));
