/*
    Given an array. Write a function to find the product of all elements which are even.

    const arr = [1, 2, 3, 7, 5, 6, 8, 9];

    Your output should be: 96
*/

const numbersArray = [1, 2, 3, 7, 5, 6, 8, 9];

const getEvenNumsProduct = numbersArray => numbersArray.reduce((acc, currentNumber) => currentNumber % 2 === 0 ? acc * currentNumber : acc, 1);
console.log(getEvenNumsProduct(numbersArray))