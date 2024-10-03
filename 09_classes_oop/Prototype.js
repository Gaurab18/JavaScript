let myName = "Gaurab        "
let myChannel = "grow"

console.log(myName.length) //since there are spaces so it print that lenght too
//to remove that we use trim or truelength method

// so to give power to every string to see true length

let myHeros = ["Thor","Spiderman"]

let heroPower = {
    Thor : "hammer",
    Spiderman : "Sling"
}

//since we  have not create any hero who is hitesh 
//but we injected hitesh in object and now it is available for all function , array .
//anyone can access hitesh now 

//Power is given to object . Here power means a value is assigned in object 
 
// Object.prototype.hitesh = function(){
//     console.log(`Hitesh sir is in all objects .`)
// }

// heroPower.hitesh()

// myHeros.hitesh(); //accesing hitesh power by array and it is available in array
//bcz hitesh is in object and in js if object have anything it can be used by array and function as well

/*
Array   -->

function  -->      Object    -->   null

String -->
*/

// Now if we give power to array , can object access it (or use it)


Array.prototype.heyHitesh = function(){
    console.log(`Can Object take my power ? No..`)
}

myHeros.hitesh() // array can't access 
myHeros.heyHitesh()
// heroPower.heyHitesh()

//inheritance
const user = {
    name:"Hello",
    email:"abc@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport //we link teachingsupport with tasupport so it can use this property
}

//inheritance
//there is 2 underscore
Teacher.__proto_ = user //accessing other fucntion outside function

//modern syntax for inheritance
Object.setPrototypeOf(TeachingSupport,Teacher) //1st is whose value we want to access 2nd is who want to access/control.

//solving problem
let anotherUsername = "BeStrong   "
//obselete property
String.prototype.trueLength = function(){
    console.log(`${this}`);//to print who is calling
    console.log(`True length is: ${this.trim().length}`)
}

anotherUsername.trueLength();
"hitesh".trueLength();
"iceTea".trueLength();