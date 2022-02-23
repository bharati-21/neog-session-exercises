/* 
    Given an array. Write a function to change all even numbers in an array to odd numbers by adding 1 to it.
*/
const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

const evenArr = arr.map(value => value % 2 === 0 ? value+1 : value);
console.log(evenArr);

const convertEvenToOdd = arr => arr.map(value => value % 2 === 0 ? value + 1 : value);
console.log(convertEvenToOdd(arr));