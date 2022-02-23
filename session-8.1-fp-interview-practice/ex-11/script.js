/*

    Given an array. Write a function to join all elements of the array with a hyphen in between them.

    const arr = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"]

    const arr = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"]

*/

const arr = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"]

const joinArrayWithHyphen = array => array.join('-');
console.log(joinArrayWithHyphen(arr));

const str = 'Violet';
const getStringWithHyphen = str => str.split('').join('-');
console.log(getStringWithHyphen(str));

console.log([...str].join('-'));