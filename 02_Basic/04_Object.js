// const tinderUser = new Object() // it is an empty object , singleton object

const tinderUser ={} //non singleton object

tinderUser.id = "123ad"
tinderUser.name = "acwe"
tinderUser.isLoggedIn = true
// console.log(tinderUser)

//nesting of object
const regularUser ={
    email : "support@gmail.com",
    fullname : {
        userfullname :{
            firstname : "Gaurab",
            lastname : "Singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

//combining of objects
const obj1 = {1:"a",2: "b"}
const obj2 = {3:"da", 4:"f"}
const obj = { 5:"asd", 6:"jw"}

// const obj3 = {obj1,obj2} //concatinating vale of object
// console.log(obj3) //returns object inside object

//other method
// const obj3 = Object.assign({},obj1,obj2,obj3) //here {} can be neglected but if used then consider it as destination
// console.log(obj3)

//Spread method
const obj3 = {...obj1,...obj}
// console.log(obj3)

//syntax used when value come from database
const user = [ //inside array many object
    {
        id: 1,
        email:"hasdf@gmail.com"
    },
    {
        id:2,
        email: "adf@gmail.com"
    },
]

// const result = user[1].email; //since it is array so to access it we use []
// console.log(result)

// const tinderUser ={} //non singleton object
// console.log(tinderUser)
// console.log(Object.keys(tinderUser)) // to print all key from object syntax-> Object.key(objectName)
// console.log("Values")
// console.log(Object.values(tinderUser))
// console.log("Entries")
// console.log(Object.entries(tinderUser))
 
// Useownproperty-> tells whether that value or variable is present or not
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))
// console.log(tinderUser.hasOwnProperty('Place'))

//Object de-structure

const course = {
    courseName  : "B.Tech",
    cousreId: 2012332,
    courseInstructor : "Rdj",
    price:"12"
}

course.courseIntstructor //it is very hectic to write it again and again so we use object de structure
//for this we need to write object.object variable name

//syntax
// const {variable name which need to be printed again } = from where we need to extract value 

const {courseInstructor} = course //but using this we write variable name inside{},it wil be used while printing
console.log(courseInstructor) 

const {courseInstructor : instructor} = course // when we think name is big so we use variable name : shortcut name .
console.log(instructor)

//In React -> we use props.company again and again . so we use company instead
// const navbar = (company) => {

// }
// navbar(company = "hitesh")


// API

// Jab apna kam kisi or ke sir me dalna ho tb ham api use krte hai .
// API handles values which come from back end . Initially value used to come in form of xml but now it comes in form of JSON .

//JSON
// {
//     "name" : "nilesh",
//     "id": "123"
// }
//here it will show error but it is write

//in json there is no name it is similar to object . In json it take value and key in form of string .
//Sometime we get API in form of array . Where array contain object . 
//API-> Randomuser me website 
[
    {},
    {},
    {}
]