let a = 10 // global scope
const b = 20
var c = 30 // if var is declared locally it can be accesed outside scope .

if(true)
{
    let a =300 //block sope
    var c = 30
}
console.log(c) // it should not print value of c , bcz it was declared locally . so var is not used

console.log(a)
// console.log(b)


// Different ways to make function

//1 method
//one(6) // it shows no error
function one(value)
{
 return value
}

one(2)

//2nd method -> in js variable are so powerful they can store json value ,function etc .
// two(5)  // error -> for this type of declaration but not for normal function declaration
const two = function (num){
return num + 2
}

two(5) //it will work if we used it below the defination of function . but if used above the function defination it will show error .