const user = {
    username: 'Gaurab',
    loginCount: 4,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details")
        // console.log(`Username: ${username}`)//it gives error bcz it dont know we are asking for which username there can  be many usename(context of which user)
        //so this keyword is used to tell that we are talking/using  current context
        // console.log(`Username: ${this.username}`)
        console.log(this) //it will show the object in which it is used
    }

}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this) //since we are using it globally and there is no object , so it will show null object ({})


//Why use constructor

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isloggedIn = isLoggedIn;

    return this;
}

// const userOne = User('Gaurab',11,true) 
// const userTwo = User('Hello',10,false) //
// console.log(userOne) //when we created this function and called it from userOne but changes are reflected in function without calling userTwo
//so to overcome this problem we use new to create the constructor
// console.log(userTwo) 

//creating constructor -> We use new word to create constructor
const userOne = new User('Galaxy',10,true)
const userTwo = new User('Ciao',22,false)

console.log(userOne)
console.log(userTwo)