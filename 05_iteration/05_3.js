// for of

const myArray = [1,2,3,4,5]

// for (const element of object) {
// here element is variable name which we want to give
// object is that thing where we want to use loop like myArray here
// }
for (const num of myArray) {
    // console.log(num);
}

// It can be used with String

const greeting  = "Have a Nice Day"

for(const value of greeting){
    // console.log("Each Char is : " , value)
    //can use if statement if not want to print whitespace
}


// Maps
// No duplicate value in map . It is also a object with key value pair , they we we inserted it , there order remain same
const myMap =  new Map() 
myMap.set('IN' , "INDIA")
myMap.set('fr' , "France")
myMap.set('un' , "United Natioon")
// console.log(myMap)

for(const key of myMap){
    // console.log(key) // it show answer in array form 
}

// when want to print key and value and not in array form
// Destructure of array
for(const [key,value] of myMap){
    // console.log(key, ' :-' , value);
}

// for Object
// object is not iterable using for of 
const myObject = {
    'game1' : 'NFS',
    'game2' : 'GTA',
    'game3' : 'SpiderMan'
}

for(const key of myObject){
    console.log(key)
}

