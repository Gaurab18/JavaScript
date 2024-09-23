const score = 400
console.log(score)

const balance = new Number(1000.12)
console.log(Number)

console.log(balance.toString().length); //by converting it to string we can find its length
console.log(balance.toFixed(1)); //gives value up to 1 decimal

const otherNumber = 23.34

console.log(otherNumber.toPrecision(2))

const hundreds =100000
console.log(hundreds.toLocaleString()) //convert the number by using comma in american form
console.log(hundreds.toLocaleString('en-IN')) //to show comma in indian form

// ******************** Maths********************
console.log(Math)
console.log(Math.abs(-3)) //convert negative value to positive
console.log(Math.round(4.6)) //round off the value . Appropiate to use this .
console.log(Math.ceil(4.6)) //round off the value in highest value
console.log(Math.floor(4.6)) //round off the value to smaller value
console.log("Max and Min Value")
console.log(Math.max(2,4,5,1))
console.log(Math.min(9,6,4,1))

//Random - Gives value between 0 and 1
console.log(Math.random())
console.log(Math.random() + 1) //gives value greater then 1
console.log(Math.random()*10);

const min = 10
const max = 20

console.log(Math.random() * (max-min+1)) // gives random value but nor between 10 and 20
console.log(Math.random() * (max-min+1) + min) //give value between 10 and 20 

