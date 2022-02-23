/*
    Given an array of objects.

    const inventory = [
        {name: 'fans', quantity: 3},
        {name: 'chimneys', quantity: 0},
        {name: 'bulbs', quantity: 5},
        {name: 'stove', quantity: 1}    
    ];

    a. Get all the items in an array whose quantity is less than 2.
    b. Get the total quantity of items present in the inventory.
    c. Find the object which contains the item whose quantity is zero.
*/

const inventory = [
    {name: 'fans', quantity: 3},
    {name: 'chimneys', quantity: 0},
    {name: 'bulbs', quantity: 5},
    {name: 'stove', quantity: 1}    
];

const getItemsWithQuantityLessThanTwo = items => items.filter(item => item.quantity < 2);
console.log(getItemsWithQuantityLessThanTwo(inventory))

const getTotalQuantity = items => items.reduce((accumulator, currentItem) => currentItem.quantity + accumulator, 0);
console.log(getTotalQuantity(inventory))

const getItemWithZeroQuantity = items => items.filter(item => item.quantity === 0);
console.log(getItemWithZeroQuantity(inventory))