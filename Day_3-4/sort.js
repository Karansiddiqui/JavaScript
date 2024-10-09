// sort -> mutates original array if you don't want then use toSorted
// first it convert into string and compare on the basis of UTF-16 unit code
// sorted in place


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newArr = arr.sort((a, b) => {
    return a - b
});
// newArr[1] = 100
console.log(arr)

console.log(newArr)

let arr1= ['asfdb','asaa','csa']
arr1.sort()
console.log(arr1)