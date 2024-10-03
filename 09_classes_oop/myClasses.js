//ES6?

// class User{
//     constructor(username,email,password){
//         this.username =username;
//         this.email = email;
//         this.password = password;
//     }

//     //method
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("rhino","abc#212",124)

// console.log(chai.encryptPassword())
// console.log(chai.changeUsername())

//Behind the scene (if there was no class then we can use function to do same work)
function User(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}axc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("Hello","hi@12.com","435")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());