// this refer to current context (value)

//creating object
const user = {
 username: "Hitesh",
 price: 789,
//created a function . when a new user come , it will receive the message of welcome
 welcomeMessage: function() {
    console.log(`${this.username} , welcome to website `) // here we used this bcz it works in the current context and for it user is the current context
    console.log(this) // here current context for this keyword is user object 
 }
}

// user.welcomeMessage()
// user.username = "Sam" // change username and now it will show different welcome msg for sam
// user.welcomeMessage()

// console.log(this) // but here there is no current context for this keyword

//Arrow Function
// function chai(){
//     let usename = "hitesh"
//     console.log(this.username) // we cant use this.username inside function . it can be used inside object
// }
// chai()

// const tea = function (){
//     let username = "didi"
//     console.log(this.username)
//     //same for this type of function declaration . this function doesnt work inside it .
// }
// tea()

//Arrow function . Remove function and just add arrow after bracket and everything is same
const chai = () => {
  let username = "bob"
  console.log(this.username)
  // this also doest work for arrow function
}

// chai()

// const addTwo =  (num1,num2) => {
//     return num1 + num2 // if we use curly bracket we use return keyword
// explicit return (means we need to use return keyword)
// }

// console.log(addTwo(1,8))

// 2nd method . Implicit return ( implicit meaning -> we assume )
// we dont use curly braces , we use paranthesis so no need to write return keyword

// const addTwo = (num1,num2) => (num1  + num2 ) // it will be used in react just remember it

const addTwo = (num1,num2) => ({username : "Gaurab"})  // we need to use curly braces if we want to return somthing without using return here.

console.log(addTwo(10,10))