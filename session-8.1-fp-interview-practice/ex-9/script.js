/*
    Given an array of objects. If the name of an item is more than 5 characters in length, add type as ‘vegetable’. If the name of an item is less than or equal to 5 characters in length, add type as ‘fruit’. 
*/


/*
output -
const arrOfObjects = [
	{
		name: "Apple",
		type: "fruit"
	},
	{
		name: "Mango",
		type: "fruit"
	},
	{
		name: "Potato",
		type: "vegetable"
	},
	{
		name: "Guava",
		type: "fruit"
	},
	{
		name: "Capsicum",
		type: "vegetable"
	}
]
*/

const array = [
	{
		name: "Apple"
	},
	{
		name: "Mango"
	},
	{
		name: "Potato"
	},
	{
		name: "Guava"
	},
	{
		name: "Capsicum"
	}
]



const getTypeofItem = array => array.map(item => item.name.length > 5 ? {...item, type: 'Vegetable'} : {...item, type: 'Fruit'});

console.log(getTypeofItem(array));

