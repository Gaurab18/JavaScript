//Declaration of object have 2 method -> 1.Literal ,2.Constructor
//Singleton ->When we make object with this then it create singleton literal . When we make object using constructor then it make it singleton

// object literal 

//Declaration of object use {}

//object .create (singleton method)
//inside object there is concept of key and value

const mySym = Symbol("Key1") //symbol is created

const Jsuser ={
    name: "Gaurav", //by default system process it as "string" -> "name" but we dont write it like this
    email: "gaurab4218@gmail.com",
    //mySym : "myKey1", // square bracket is not used so it is not a symbol it is string .
    [mySym]: "myKey1",
    age :19,
    location: "Goa",
    isLoggedIn : false,
    lastLoggedIn: ["Monday", "Friday"]
}

//Access object
console.log(Jsuser.email)
// console.log(Jsuser[email]) //since key is taken as string in backend as shoen n line 11 , therfoe we need to write ["email"]
console.log(Jsuser["email"])

// console.log(Jsuser.mySym) // it show string but it is symbol
// console.log(typeof(Jsuser.mySym)) // it shows type string

console.log(Jsuser[mySym])
console.log(typeof(Jsuser[mySym]))

// change value of object
Jsuser.email = "hitesh@gpt.com"
// console.log(Jsuser.email)
// Object.freeze(Jsuser) // it will stop from making changes in object values . Syntax -> Object.freeze(object name)
Jsuser.email= "gaurab321@gas" //after using freeze it doesnt changes it value
// console.log(Jsuser.email)
// console.log(Jsuser)

Jsuser.greeting = function(){
    console.log("Happy Independence Day");
}
console.log(Jsuser.greeting()); // It also print undefined ,need to think about it .

console.log(Jsuser.greeting) // it returns refernce

Jsuser.greetingTwo = function(){
    console.log(`Hello Js User , ${this.name}`) // when we need to refernce same object we use (this) function
}

console.log(Jsuser.greetingTwo())