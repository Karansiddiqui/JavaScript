// call -> call to another function with this value and arguments

// when we call function inside another function then we use call method
// call method tell the another method that you have to modify this value
// if not use call then after caling the method it removed from the global execution context and its value also removed so
// we have to pass this value to another function

function userName(name) {
  this.userName = name;
}

function user(name, age, gender) {
  userName.call(this, name);
  this.age = age;
  this.gender = gender;
}


console.log(new user("Karan", 21, "Male"));

// apply -> call to another function with this value and arguments but arguments in array
// it is used when we don't know size of array r arguments passed

const obj = [
  { email: "bsaladine0@google.nl", gender: "Female" },
  { email: "rgiamo1@va.gov", gender: "Female" },
  { email: "sdix2@shutterfly.com", gender: "Male" },
  { email: "ipotteridge3@cafepress.com", gender: "Female" },
  { email: "wcohrs4@spotify.com", gender: "Female" },
  { email: "clefleming5@deviantart.com", gender: "Male" },
  { email: "talyokhin6@java.com", gender: "Genderfluid" },
  { email: "rletten7@alibaba.com", gender: "Male" },
  { email: "afeldstein8@ca.gov", gender: "Male" },
  { email: "acarlesso9@japanpost.jp", gender: "Female" },
  { email: "aemsona@ustream.tv", gender: "Female" },
  { email: "ctrytsmanb@marriott.com", gender: "Female" },
  { email: "sbertomec@europa.eu", gender: "Female" },
  { email: "cfurnissd@posterous.com", gender: "Female" },
  { email: "aarpe@dailymotion.com", gender: "Male" },
  { email: "mjersonf@list-manage.com", gender: "Female" },
  { email: "dodyvoyg@t-online.de", gender: "Female" },
  { email: "adaymenth@meetup.com", gender: "Female" },
  { email: "scasottii@miibeian.gov.cn", gender: "Female" },
  { email: "jmuskerj@census.gov", gender: "Polygender" },
];

function email (...obj) {
    obj.forEach((element) => {
        console.log(element.email);
    })
}

email.apply(null, [...obj]);


// bind -> call to another function with this value and arguments but it doesn't call the function immediately
// it returns the function with this value

const person = {
  name: "Karan",
  age: 21,
  gender: "Male",
};

function getName() {
 return this.name;
}

const getNameBind = getName.bind(person);

console.log(getNameBind());


console.log(getName.call(person))