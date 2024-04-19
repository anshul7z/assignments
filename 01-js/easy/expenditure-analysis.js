/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let resultObject=[];
  transactions.foreach(element => {
    if(resultObject.length!=0){
      resultObject.some(r => {
        if(element.category==r.category){
          r.totalSpent+=element.price;
          return true;
        }
        let obj={
          "catagory":element.category,
          "totalSpent":element.price
        }
        resultObject.push(obj);
      });
    }else{
      let obj={
        "catagory":element.category,
        "totalSpent":element.price
      }
      resultObject.push(obj);
    }
  });
  return resultObject;
}

let transictions1=[
  {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	},
  {
		id: 2,
		timestamp: 1656076800000,
		price: 15,
		category: 'Clothing',
		itemName: 'shirt',
	},
  {
		id: 4,
		timestamp: 1656076800000,
		price: 20,
		category: 'Food',
		itemName: 'Pizza',
	},
  {
		id: 3,
		timestamp: 1656076800000,
		price: 40,
		category: 'Electronics',
		itemName: 'tv',
	}
];
  
let result = calculateTotalSpentByCategory(transictions1);
console.log(result);
module.exports = calculateTotalSpentByCategory;
