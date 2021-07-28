let arr1 = [0,2,4,6,8]
let arr2 = [1,3,5,7]

let x = arr1.concat(arr2)
x.sort(function(a, b){return a - b});
console.log(x)