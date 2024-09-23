//Variable and Const

const accountId = 13223
let accountEmail = "abc@gmail.com"
var acountPassword = "2234"
accountCity = "Jaipur"

// accountId = 3 // can't modify it because it is const .
accountEmail = "xyz12@gmail.com"
accountPassword = "9874"

console.table([accountId , accountCity , accountPassword]) // Can be used to print variables together.

// console.log(accountId); 

/*
Prefer not to use var - because of issue in block and functional scope . Means when changes is made in function then the variable gets changed 
everytime .
A programmer made a var and made changes in code , then another programmer came and accidentally made same variable then the value of variable 
gets changed .
*/