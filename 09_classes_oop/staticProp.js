class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username :${this.username}`)
    }

    //when we dont want to let eeryone use it
    static createId(){
        return 356;
    }
}

const hitesh = new User("Gaurab");
// console.log(hitesh.createId()) //we have used static so it will not be accessible

class Teacher extends User{
  constructor(username,email){
    super(username)//to not use call we used super it keep value of username
    this.email = email;
  }
}

const iphone = new Teacher("iphone","i@max.com")
iphone.logMe();
// console.log(iphone.createId()) 
//we used static so inherited class can also not use staic function neihter the child .
