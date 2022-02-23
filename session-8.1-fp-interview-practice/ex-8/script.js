/*
    Given an array. Convert it in to an object with key as the index of each element and value as the element itself.
    
    const arr = ["You", "all", "are", "rockstars"];
    Your output should be:
    {'0', "You", '1': "all", '2': "are", '3': "rockstars"}
*/

const arr = ["You", "all", "are", "rockstars"];
const convertArrayToObject = arr => arr.reduce((acc, currentValue, index) => ({...acc, [index]: currentValue}) ,{})
console.log(convertArrayToObject(arr))