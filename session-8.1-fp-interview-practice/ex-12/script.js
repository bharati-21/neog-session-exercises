/*
    Write a function that accepts a number as input and inserts hyphens between every two even numbers.
*/

const insertHyphenBetweenEvenNums = number => {
    const numAsString = String(number);
    let hyphenatedNums = numAsString[0];

    for(let i = 1; i<numAsString.length; i++) {
        if(Number(numAsString[i]) %2 === 0 && Number(numAsString[i-1]) %2 === 0) {
            hyphenatedNums +=  '-';
        }
        hyphenatedNums += numAsString[i];
    }
    return hyphenatedNums;
}
const number = 24345687;

console.log(insertHyphenBetweenEvenNums(number));

const insertHyphenBetweenNumsWithReduce = numAsString => numAsString.split('').reduce((acc, currentNum) => acc + (currentNum % 2 === 0 && acc[acc.length - 1] % 2 === 0 ? '-' : '') + currentNum);

console.log(insertHyphenBetweenNumsWithReduce('' + number))