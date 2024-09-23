// Function
// Function is a huge line of code which can be used anywhere multiple time .

//In javascript there is no datatype need to be included in parameter passing

// function addTwoNumber(number1,number2)  //Parameter -> When we make the defination of function we use parameter
// {
//     console.log(number1 + number2)
// }

// addTwoNumber(3,4) //argument -> when we call a function . what we used inside function is called argument

function addThreeNumber(number1,number2,number3)
{
    // let result = number1 + number2 + number3  // local scope
    // console.log(result)
    // return result;
    return (number1 + number2 + number3)
    //if we write any thing under it then that part will not work .
}

// const result = addThreeNumber(3,4,5) // now we store the result in a variable // global scope
// console.log( result) // since the function is not returning any value so it is undefined
// console.log("Result is : ", result) // since the function is not returning any value so it is undefined

function loginUser(username = "Sam") // when no value is passed then this value is taken
{
    // if(username === undefined)
    if(!username) //same as above statement 
    {
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in `
}

// const user = loginUser("Gaurab")
// console.log(user)
// console.log(loginUser()) //when nothing is passed
// console.log(loginUser("Priority")) //when value is passed here then it will be assigned no matter what value is passed in function defination


// shopping card 
//condition where we dont know how much argument is about to come .i.e, how many item will user add in cart

// function calculateCartPrice(...num1) //rest operator -> take all input into array no matter how much input is assigned . 
// ...num is also a spread operator
function calculateCartPrice(val1 ,val2 , ...num1)
{
 return num1 ; 
}

// console.log(calculateCartPrice(100,299,44,321)) 
// console.log(calculateCartPrice(100,1000,300,500))

//how to use object in function
const user = {
    username: "Shubham",
    price: 182
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`) //string interpolation and use of anyobject function
    //bcz anyobject can be used .
}

// console.log(handleObject(user)) //passing object
// handleObject(user)

//other method by directly passing object in function
handleObject(
    {
    username : "samCurran",
    price : 999
    }
)

//Passing array
const newArray = [100,200,300,400]

function returnSecondValue(getArray) //can pass any value of argument
{
 return getArray[2] // we used getArray bcz getArray is passed as a argument and not used main array i.e, newArray
}

// console.log(returnSecondValue(newArray))
console.log(returnSecondValue([200,300,400,500]) ) // we can directly pass array in the function