//google: It is an object that will produce a single value some time in future
//If promise is sucessful it will produce a resolved value
//If something goes wrong it will produce the reason why a promise failed.
// The possible outcomes here are similar to that of promises in real life.

//Gpt: They represent the eventual completion or failure of an asynchronous operation and allow you to chain operations.

const promiseOne = new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log("Async task is complete");
        resolve();
    },1000)

});

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(()=> {
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Promise 2 consumed");
})

const promiseThree = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({username: 'Computer', email: 'comp@example.com'})
    },1000)
}).then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(()=>{
        let error = false
        if (!error){
            resolve({username: 'Computer', password: '123'})
        }else{
            reject('ERR: Something went wrong')
        }
    }, 1000)
})

promiseFour.then((user)=>{
    return user.username;
}).then((x)=>{
    console.log(x);
}).catch((err)=>{
    console.log('err');
}).finally(()=>{
    console.log('The promise is either resolved or rejected');
})

const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true
        if (!error){
            resolve({username: 'Javascript', password: '123'})
        }else{
            reject('ERR: JS went wrong')
        }
    }, 1000)
})

//async await

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data =  await response.json();
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()

//with promises:

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{console.log(err);})