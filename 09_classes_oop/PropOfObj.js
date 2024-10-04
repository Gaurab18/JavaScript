//can we change value of pi from 3.1432.. no

const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")

console.log(descriptor)
/*
it show this result thats why it is not chageable
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/
//object creation 
const chai = {
   name:'ginger',
   price:250,
   isAvailable: true,

   orderChai : function(){
     console.log("Chai nhi bani")
   }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,
    
})
//what property of object we want to change is mentioned after object name in bracket
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}