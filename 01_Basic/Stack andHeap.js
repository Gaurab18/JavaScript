//Stack(Primitive) all primitive values comes here like number , boolean etc .
//Heap(Non-primitive)Those data type which are created by user like classes .

//When data is stored in stack and we try to make change in that data then we get a copy of that data .
//But in heap we get reference of that data .i.e., we can make changes on original data .

//Working as stack
let myYoutubename = "alphatube"

let anotherName = myYoutubename
anotherName = "betaGamma"

console.log(myYoutubename);
console.log(anotherName);

//heap
let userOne = {
    email:"gaurab4218@gmail.com",
    upi: "abcd@ybl"
}

let userTwo = userOne 

userTwo.email = "jujutsu@792.com";

console.log(userOne)
console.log(userTwo)
console.log(userTwo.email)