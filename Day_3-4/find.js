// fimd -> return first element that satisfies the condition

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(
  arr.find((element) => {
    return element > 6;
  })
);

const fruit = [
  {
    name: "mango",
    color: "yellow",
  },
  {
    name: "apple",
    color: "red",
  },
  {
    name: "banana",
    color: "yellow",
  }
];



console.log(fruit.find((element) => {
    return element.color === "yellow";
}))