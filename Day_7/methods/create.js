// create -> create method is used to create new object along as prototypes
//  also used in single inheritance
// const person = {
//     name: "John",
//     age: {years: 30, months: 2},
// };

// person.introduce = function() {
//     console.log(`Hello, my name is ${this.name} and age is ${this.age.years} years and ${this.age.months} months!`);
// }

// person.introduce(); // Hello, my name is John!

// // creating new object using create method

// const rohn = Object.create(person);

// rohn.name = "rohn";
// rohn.introduce(); // Hello, my name is John!



function userDefine (name, age) {
    this.name = name;
    this.age = age;
}
userDefine.prototype.introduce = function() {
    return`Hello, my name is ${this.name} and I am ${this.age}!`;
}

function user(name, age) {
    userDefine.call(this, name, age);
}





user.prototype = Object.create(userDefine.prototype);

user.prototype.constructor = user;
user.prototype.introduce = function() {
        return`Hello, my name is ${this.name}`;
    }
const john1 = new user("John", 30);
console.log(john1);

console.log(john1.introduce());

console.log(userDefine.prototype.introduce());




// if directly assign prototype share same memory and overrride each other
// user.prototype = userDefine.prototype;
// user.prototype.introduce = function() {
//     return`Hello, my name is ${this.name}`;
// }

// // user.prototype = Object.create(userDefine.prototype);
// const john = new user("John", 30);
// console.log(john);


// console.log(john.introduce());
// console.log(userDefine.prototype.introduce());



// const rohn1 = new user("Rohn", 30);

// console.log(rohn1.introduce());
