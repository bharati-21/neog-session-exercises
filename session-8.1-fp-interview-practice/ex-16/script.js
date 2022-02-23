/*
    Count the occurrences of distinct elements in the given array.
    const input = [
        ['a', 'b', 'c'],
        ['c', 'd', 'e'],
        ['e', 'd', 'f'],
    ];

    Your output should be: {a: 1, b: 1, c: 2, d: 2, e: 2, f: 1}
*/

const input = [
    ['a', 'b', 'c'],
    ['c', 'd', 'e'],
    ['e', 'd', 'f'],
];

const oneDArray = numberArray => numberArray.reduce((outerAccum, currentArray) => [...outerAccum, ...currentArray], []);

const getNumOccurrences = input => oneDArray(input).reduce((accum, number) =>  ({...accum, [number]: number in accum ? accum[number] + 1 : 1}), {});

console.log(getNumOccurrences(input));
