/*
    Write a function that takes in a string and converts only the vowels to uppercase and all other characters to lowercase.

    If your input is: "neoG"
    Your output should be: "nEOg"
*/

const convetToUpperLowerCase = string => string.split('').map(char => char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ? char.toUpperCase() : char.toLowerCase()).join('');
console.log(convetToUpperLowerCase('neoG'));