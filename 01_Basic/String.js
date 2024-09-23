const name = "Gaurab"
const repoCount =  12

// console.log(name + repoCount + "Value")

//New way to insert a variable or concatenate
// ${} to insert a variable 
// String interpolation

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//Can also use other function with ${} . like uppercase , lowercase
console.log(`Hey is your name is ${name.toUpperCase()}`);
//touppercase doesnt changes original string as it is stored in stack so the copy is created and changes occur there .

// 2nd method to declare string
const getName = new String('hitesh-fa')

console.log(getName[0])
console.log(getName.__proto__); //it returns object
 //its double underscore 

 console.log(getName.length);

 //method to know character position
 console.log(getName.charAt(3)); // tells the element at position 3. Gaurab so at 3 posn it is 'u'

 //there are different methods in string so go through it and make list of  it .

 //Some other methods like substring (it cant take negative index), slice(it accept negative index and negative index means it will look in string from back),
 //trim 

 const newName = getName
 console.log(newName.slice(-1,3));
const newStringOne = "   adfabf   "

console.log(newStringOne)
 //trim removes the forward and backward space
console.log(newStringOne.trim())

const url = "https:gaurabblog.com/gaurab21"

console.log(url.replace('21','-')) //replace 21 in url with -
console.log(url.includes('gaurab')) //check if gaurab is present or not .

console.log(getName.split('-'))