// this -> "this" refers to a current context in which the function is called

// this keyword is not working with arrow function because functionality of this differ in arrow function
// this in arrow function refer to global object
function greet() {
  console.log(`Hello, ${this.name}!`);
}

const person = {
  name: "John",
  greet,
};

person.greet();



// arrow function donot have own this , it have this of its lexical scope which is global

const great = () => {
    console.log(`Hello, ${this.name}!`);
}

const person2 = {
  name: "Jane",
  great,
};

person2.great();

