// truthy value 
// When we assume that value is true . 
//[],true, "0" anything inside string is considered as true , " " , { } , function(){}

//Falsy value
// false. 0 , -0, bigint , "" empty string is also falsy ,null , undefined , NaN

// const email = "gaurab@ai"

// if(email) //since there is value in email so it is considered as true so if work and it is truthy value
// // as there was no condition so we take it true 
// {
//     console.log("user email")
// }
// else{
//     console.log("Enter email")
// }

//how to check array is empty
// const userEmail = []

// if(userEmail.length === 0 )
// {
//     console.log("Array is Empty")
// }

// when object is empty
const emptyObject = {}
// when we use keys in object it convert into array then we use length property
if(Object.keys(emptyObject).length === 0){
    console.log("Object is empty")
}

//Nullish Coalescing Operator (??) : null undefined
// When error occur what value can be used

val1 = 5 ?? 10
// val1 = 10 ?? null
// val1 = 10 ?? undefined
// val1 = null ?? 10 ?? 20

console.log(val1)

// Ternary Operator
// condition ? true : false

const iceTea = 500

iceTea >= 100 ? console.log("Greater then 100") : console.log("less then 100")