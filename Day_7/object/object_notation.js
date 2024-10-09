// In JavaScript, both dot notation (.) and bracket notation ([]) are used to access and manipulate object properties, but they differ in syntax, use cases, and flexibility.

// Dot Notation:
// Use Case: Dot notation is typically used when the property name is a valid identifier (i.e., it follows variable naming rules: no spaces, no starting with a number, no special characters except _ and $).

// Bracket Notation:
// Use Case: Bracket notation is more flexible and allows access to property names that:
// Are dynamically generated or stored in variables.
// Contain special characters or spaces.
// Are not valid identifiers (like starting with a number or containing spaces).


// Key Differences:
// When to Use:

// Dot notation: Used when the property name is a simple, valid identifier (e.g., name, age, isAdmin).
// Bracket notation: Used when the property name is dynamic, contains spaces, starts with a number, or contains special characters.
// Syntax:

// Dot notation: Requires the property name to be written directly after the dot. No quotes are allowed.
// Bracket notation: Requires the property name to be written inside quotes or passed via a variable.
// Dynamic Access:

// Dot notation: Cannot be used for dynamic property names (i.e., variables).
// Bracket notation: Can use variables, making it more flexible for dynamically accessing properties.



const person = {
  name: "John",
  age: 30
};

console.log(person.name);
console.log(person.age); 



// Example 1: Accessing with a variable
const person1 = {
  name: "John",
  age: 30
};

const property = "age";
console.log(person1[property]);


// Example 2: Property with spaces
const person3 = {
  "full name": "John Doe"
};

console.log(person3["full name"]);


// Example 3: Property starting with a number
const obj = {
  "1stPlace": "Gold",
  "2ndPlace": "Silver"
};

console.log(obj["1stPlace"]); 

// Example: Dynamic property acces
const key = "name";
const person4 = { name: "Alice", age: 25 };

console.log(person4[key]);  // Output: "Alice" (Bracket notation allows dynamic key)
console.log(person4.key);   // Output: undefined (Dot notation looks for a property called "key")



