// search -> return index of first occurance of element in array


const str = "I think Ruth's dog is cuter than your dog!";

console.log(str.search("dog"));

const regex = /[^\w\s']/g;

console.log(str.search(regex));
console.log(str[str.search(regex)]);

