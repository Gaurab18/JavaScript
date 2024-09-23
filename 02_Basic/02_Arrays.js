//Prototype and prototype chaining
const marvel_heros = ["SpiderMan","IronMan","Hulk","Thor"]
const dc_heros = ["Flash","Batman","Superman"]

// when we want to add all value in one array
// marvel_heros.push(dc_heros) //push add elements in array as a single element if array is added in it .
// console.log(marvel_heros) // it adds other array as a single element

// const all_heros = marvel_heros.concat(dc_heros) //it add element of one array into other array
// console.log(all_heros)

//Spread method used to add element of one array into other , it can add 2 or more array but concat cant .we use 3 dots as a syntax
const all_heros = [...marvel_heros,...dc_heros]
console.log(all_heros)

//another method to spread the array
const another_array = [1,2,3,4,[11,22,33],[44,66,324]]
const real_anotherarray = another_array.flat(Infinity)
console.log(real_anotherarray)

//if element is present or not
console.log(Array.isArray("Hitachi"))

//to make element present or convert in array
//make iterable object convert into array 
console.log(Array.from("Ninja"))
console.log(Array.from({name : "Gaurab"}) ) //interesting . It will return empty string .

let score1 = 100
let score2 = 200
let score3 = 300
// what does OF do ?
console.log(Array.of(score1,score2,score3))