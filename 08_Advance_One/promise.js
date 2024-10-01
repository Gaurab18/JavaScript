//Promise is a event which will occur in future ? 

//creating prommise method 1
const promiseOne = new Promise(function(resolve,reject){
    //do an async task
    //db calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete')
        resolve()//we can pass value here and it will be assigned to then
    },1000)

})

promiseOne.then(function(){
    console.log('Promise Consumed')
})

//Method 2
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async Task 2');
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolved")
// })

//Providing parameter in resolve
const promiseThree = new Promise(function(resolve,reject){
    resolve({username: "Chai", email:"abc@g mail.com"})
},1000)

promiseThree.then(function(user){
    console.log(user)
})



const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(error){ //when no error
            resolve({username:"Gaurab",password:"12345"})
        }
        // if(!error){ //when there is error it goes to else part
        //     resolve({username:"Gaurab",password:"123"})
        // }
        else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

//then takes the value which is sended , catch takes the error ,finally accept everything
promiseFour.then((user) =>{
 console.log(user);
 return user.username;
})                        //chaining of then
.then((username)=>{   //we have written it in next line to make it readable
console.log(username)
})
.catch(function(error){  //used a function and argument error(it can be err to)
    console.log(error)
}).finally(() => console.log('Promise is Resolve or Rejected'))
//finall ?? read about it ..


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"javascript",password:"09887"})
        }
        else{
            reject('Error : JS went wrong ')
        }
    },1000)
})

//async /await it is similar to then ,catch . it wait for work if error then stop
//they dont handle error directly one drawback . So we can use try and catch .  
async function consumePromiseFive(){
    try{
    const response = await promiseFive //what ever comes from promisefive take it , promise is a object so we dont handle it by using () here.
    console.log(response);
    }catch(error){
        console.log(error);
    }
}

async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data)
    } 
    catch(error){
        console.log("E:", error);
    }
}

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.catch((error) => {
 console.log(error)
})