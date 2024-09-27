const myObject = {
    js : 'JavaScript',
    cpp : 'c++',
    rb : "ruby",
    swift : 'Swift by Apple'
}

// for in loop
for (const key in myObject) {
//    console.log(key) // Prints key
    // console.log(myObject[key]) // it prints the value
    // console.log(`${key} shortcut is for ${myObject[key]}`)
}

// Can we use for in loop in array
const programming = ["Java" , "C++" , "ruby"]

for(const key in programming){
    // console.log(key) // it returns key and key of array are its index and object was developed bcz key in index start from 0 and it is number ,  but
    //in object key can be anything
    // console.log(programming[key]) //  it return value
}

// Can we use for in loop in map
// Map is not iterable

const myMap = new Map()

myMap.set('IN','India')
myMap.set('Fr','France')
for(const value in myMap){
    console.log(key)
}