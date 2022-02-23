/*
    const family = [
        {
            name    : 'Tanay',
            haveCycle : true
        },
        {
            name     : 'Akanksha',
            haveCycle : false
        },
        {
            name     : 'Tanvi',
            haveCycle : true
        },
            {
            name     : 'Kanak',
            haveCycle : false
        }
    ];

    Your output should be: ['Tanay', 'Tanvi']
*/

// Get the names in an array for only those who have a cycle.

const family = [
    {
        name    : 'Tanay',
        haveCycle : true
    },
    {
        name     : 'Akanksha',
        haveCycle : false
    },
    {
        name     : 'Tanvi',
        haveCycle : true
    },
        {
        name     : 'Kanak',
        haveCycle : false
    }
];

const getMembersWithCycle = family => family.reduce((acc, currentMember) =>  currentMember.haveCycle ? [...acc, currentMember.name] : acc ,[]);
console.log(getMembersWithCycle(family));
