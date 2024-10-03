//JavaScript behaviour is prototypial behaviour(Prototypal inheritance) that is if it not get what you want that it goes to higher layer(parent node) untill it get null
//Whatever we do in js it is object . Array,String,function all prototype are object and whatever property object have they also have that property.

function multipleBy5(num){
    return num*5
}

multipleBy5.power = 2;

console.log(multipleBy5(5))
console.log(multipleBy5.power); //function is also object
console.log(multipleBy5.prototype)

 function createUser(username,score){
    this.username = username;
    this.score = score
 }

 //method
 createUser.prototype.increment = function(){
    // score++;
    score++;
 }

 createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`)
 }

 //since two createUser are calling to increment the value so how it will identify who have called so we use this (jis ne bulaya uska this)

 //when we have transfered value from function to variable we havent told him about additinal properties (methods)
 //so to tell that , it is done by new keyword .
 const chai = new createUser("Chai",25)
 const tea = createUser("Tea",40)

 chai.printMe()