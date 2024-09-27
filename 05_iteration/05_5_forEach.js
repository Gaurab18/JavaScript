// for each 
// in array

objectname.forEach( callbackFunction )

const coding = ["js", "cpp","ruby","java"]

// coding.forEach( function (value) {
//     console.log(value)
// } )

//callback function ->funtion which dont have a name . 
//Simple declaration of function  function nameFunction() {}
//CallBack function   fuction (name of any variable) {}

// We can also use arrow function .Declaration of arrow function , but in call back name is not used ( greet= ()=> {})
// coding.forEach( (item) => {
// console.log(item)
// } )

// forEach (  (item,index,array)) // foreach contain 3 thing

// object inside array
const myCoding= [ 
{
    languageName : "javascript",
    languageFileName : "js"
},
{
    languageName : "python",
    languageFileName : "py"
}
]

myCoding.forEach( (item) => {
console.log(item.languageFileName)
})