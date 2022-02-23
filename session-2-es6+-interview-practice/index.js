// var arr1 = [1,2]
// var arr2 = [arr1, [3,4]] // [[1,2], [3,4]]
// var arr3 = [...arr2, [7,8]]; //  [[1,2],[3,4],[7,8]]
// console.log(arr2)
// console.log(arr3);

// let a = [..."apple"]; // ["a","p","p","l","3"]
// console.log(a);

var a = 1, b = 2;
[a, b] = [b,a];
console.log(a,b);

var arr1 = [1,2]
var arr2 = [arr1, [3,4]] // [[1,2], [3,4]]
var arr3 = [...arr2, [7,8]]; //  [[1,2],[3,4],[7,8]]
console.log(arr2)
console.log(arr3);

let a = [..."apple"]; // ["a","p","p","l","3"]
console.log(a);

let arr1 = [4, 5, 6];
// Convert this array to [1, 2, 3, 4, 5, 6, 7, 8]
arr1 = [1,2,3,...arr1,7,8]
console.log(arr1);

const myData = { name: "Akanksha", hobby: "Painting" }
myData.name = "Tanay"
console.log(myData)


myData = { name: "Tanay", hobby: "Cracking PJs" }
console.log(myData)

{   
    var a = 2;
    var a = 3;
    console.log(a); // (a) what will be the log?
 }
 
 {
   let b = 18;
//    let b = 20;
   console.log(b); // (b) what will be the log?
 }
