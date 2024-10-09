// replace -> replace string with another string and return new string


let str = "hello world";

let replaced = str.replace("hello", "hi");

console.log(str);
console.log(replaced);
console.log(str.replace("world", "universe"));
console.log(str.replace("h", "H"));

// replaceAll -> replace all occurences of string with another string


console.log(str.replaceAll("hello", "hi"));
console.log(str.replaceAll("l", "L"));