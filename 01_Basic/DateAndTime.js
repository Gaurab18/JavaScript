//Dates
let myDate = new Date() // we  created date as object and myDate is its instance
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())

//Date is a object
// console.log(typeof myDate)

// Month in js start with 0 . when declared as array
let myCreatedDate = new Date(2023,0,27)

console.log(myCreatedDate.toDateString())
console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp) 
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000))  // gives time in millisecond . so to convert in second we divide it by 1000 and use floor function in math to round off the value.

let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getMonth() + 1) // to get month from the given month and 1 is added bcz here 0 is janurary .
// console.log(newDate.getDay())

//Print complex date . Write full time . use string interpolaion(` `) backtick

// console.log(`Day is ${newDate.getDay()} and the time is ${newDate.getTime()} `)

// console.log(newDate.toLocaleString('default', {         //here default is used for internationalization and second is for object like weekday long or short
// month:'long',
// weekday : 'long'
// }))


