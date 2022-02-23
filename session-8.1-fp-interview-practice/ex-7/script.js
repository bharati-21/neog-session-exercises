/*
Given an array of objects. Write a function to find the sum of ages of each person.
    const arr = [
        {
            name: "Jay",
            age: 60
        },
        {
            name: "Gloria",
            age: 36
        },
        {
            name: "Manny",
            age: 16
        },
        {
            name: "Joe",
            age: 9
        }
    ]


    Your output should be: 121 
*/
/*** 60+36+16+9 ***/

const arr = [
    {
        name: "Jay",
        age: 60
    },
    {
        name: "Gloria",
        age: 36
    },
    {
        name: "Manny",
        age: 16
    },
    {
        name: "Joe",
        age: 9
    }
]

const getFamilyTotalAge = family => family.reduce((accumulator, currentMember) => accumulator + currentMember.age, 0);
console.log(getFamilyTotalAge(arr))