//Array - > Array are a datatype which are used to collect data .
//In javascript array is resizabe and contain different datatypes .
//In js copy operation make a shallow copy of array . (Whose properties share the same references as those of the source object) , means changes
//made in one array will make changes in main array

//declaration of array 
const myArr = [1,2,3,"abx"]
const myHeros = ["Spiderman","Batman","Iron-Man"]

const myArr2 =new Array(1,2,3,4,"ABC")
console.log(myArr2)
console.log(myArr2[1])

//Array Method

//Add Element
myArr.push(44);
myArr.push(45);
console.log(myArr)

//Remove element . Last element gets removed
myArr.pop()
console.log(myArr)

myArr.unshift(0) // work as push , but add element at 1st and changes the index of every element
// console.log(myArr)
// myArr.shift(0) // Work as pop , remove the first element
// console.log(myArr)

// console.log(myArr.includes(66)) // tells whether element is present or not and return true or false
// console.log(myArr.indexOf(44))

const newArr =  myArr.join() //converts the array into string

// console.log(myArr)
// console.log(newArr) //converts the array into string
// console.log(typeof newArr)

//Slice , Splice
//extract a portion of array and return a new array containing the extracted element . It doesnt modify original array ->slice
//modify original array by removing or replacing existing element in place . -> splice
console.log("A", myArr)

const myn1 = myArr.slice(1,3) //start from 1 index and end at index-1 (3-1=2)
console.log("C" , myArr) //doesnt change original array

console.log(myArr2)
const myn2 = myArr2.splice(1,3)
console.log("B", myArr2) //changes original array , can also be used to add element

console.log(myArr)
console.log(myArr2)

