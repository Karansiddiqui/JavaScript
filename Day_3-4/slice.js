// slice -> return  new shallow copy of array after slicing the original array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newarr = arr.slice(2, 5);

console.log(newarr);

let student = {
  name: "abc",
  age: 20,
};

let course = [student, "python", "javascript"];

let newcourse = course.slice(0, 2);

newcourse[0].name = "xyz";
console.log(course);

console.log(newcourse);

