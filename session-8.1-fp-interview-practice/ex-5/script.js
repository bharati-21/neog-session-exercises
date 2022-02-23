/*
    Given an array. Write a function to get the sum of all elements which are greater than 50.

    const arr = [1, 2, 3, 58, 5, 6, 62, 8, 70];
    
    Your output should be: 190
*/

const arr = [1, 2, 3, 58, 5, 6, 62, 8, 70];

const getSumOfNumsGreaterThanFifty = numbersArray => numbersArray.reduce((accumlator, currentNumber) => currentNumber > 50 ? accumlator + currentNumber : accumlator ,0);

console.log(getSumOfNumsGreaterThanFifty(arr));