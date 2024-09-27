//reduce

// accumulator , current value
const myNums = [1,2,3]

// const myTotal = myNums.reduce( function (acc , currval ) {
//   console.log(`acc: ${acc} and currval: ${currval}`);
//   return acc+ currval
// } ,0) // here we used zero bcz it initial value assigned to accumulator

// Using arrow function for same
// const myTotal = myNums.reduce( ( acc,curr) => acc + curr , 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName : 'js course',
        price : 3339
    },
    {
        itemName : 'java course',
        price : 999
    },
    {
        itemName : 'python course',
        price : 1999
    }
]

// Total of cart
//here acc, item are two variable and acc+item.price , 0 are used to assign value where 0 is used for accumulator , acc+item is used for sum of cart
const priceToPay = shoppingCart.reduce((acc, item) => acc+item.price, 0)
console.log(priceToPay)