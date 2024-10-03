class User{
    //why write constructor ??
    constructor(username){
        this.username =username;
    }

    logMe(){
        console.log(`Username us ${this.username}`)
    }
}

//inheritance
class Teacher extends User{
  constructor(username,email,password){
    super(username) 
    //instead of using call we use super it automatically look from where we are inheriting property and use this in backend .
    //it goes in user class and take username and if function is out from global execution context then it takes its all value
    this.enail = email;
    this.password = password;
  }

  addCourse(){
    console.log(`A new course was added by ${this.username} `)
  }
}

const inheritance = new Teacher("Hitesh Sir","new@abc","986");

inheritance.addCourse()

const newTea = new User("Striver")

// newTea.addCourse(); //will it have access of addCourse ?? noo
newTea.logMe(); //it have access of logme bcz user contain logMe function

//to check whether variable is a instance of class
console.log(inheritance instanceof Teacher)