//if 

// if(condition){ // when condition is true inside code is executed
//     //scope
// }

// if(false){
//     //when condition is false then it will not run
// }

// const isUserLoggedIn = true

// if(isUserLoggedIn){
//     console.log("Hello , User Logged In !")
// }

// if(2 === "2")
// {
//     console.log("Executed")
//     //since it is wrong so it doesnt get executed bcz === checks datatype , but == doesnt check datatype .
// }
// else{
//     console.log("Datatype Error!")
// }

// <, > , <= , >=, == , != , === (strictly equal) , !==


//Shorthand notation

const balance = 1000

// if(balance > 500) console.log("Test") , console.log("Test2 ") , console.log("Test3")// by using comma we can add more then 1 statement but it is not advised to do so .

//Nesting (Multiple condition)

// if(balance < 500)
// {
//     console.log("less than 500")
// }
// else if(balance < 750)
// {
//     console.log("less then 900")
// }
// else{
//     console.log("less then 1200")
// }

const userloggedIn = true
const debitcard = true

//when user fullfill both condition allow him to buy course
// and operator &&
if(userloggedIn && debitcard)
{
    console.log("Allow to buy course");
}

const loggedInFromGmail = true
const loggedInFomGoogle = false

//if user loggedIn from any of these then allow him to log in
// or || operator
if(loggedInFromGmail || loggedInFromGoogle){
    console.log("User logged in")
}