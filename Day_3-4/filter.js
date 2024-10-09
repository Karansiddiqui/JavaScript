// filter -> return new array with sallow copy  after filtering

let obj = [
  {
    name: "abc",
  },
  { name: "def" },
  { name: "ghi" }
];

let newobj = obj.filter((element) => {
  return element.name === "abc";
});

newobj[0].name = "xyz";

console.log(obj);
console.log(newobj);

// but not update original array because i use primitivce data type which is immutable
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArr = arr.filter((element) => {
  return element > 5;
});
newArr[0] = 1000;
console.log(newArr);
console.log(arr);
