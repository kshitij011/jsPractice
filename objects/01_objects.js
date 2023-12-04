// objects can be created by two types: Loterals and Constructors
//Objects declared using costructor are singleton meaning they can be used anywhere in our project

const mySym = Symbol("key")

const jsUser = {
    name: 'myName',
    email: 'myemail@gmail.com',
    'email 2': 'myemail2@gmail.com',
    mySym: 'updatedKey',    //wrong way to store key in object
    [mySym]: "Updated Key"
};

console.log(jsUser.email);
console.log(jsUser['email 2']);

console.log(jsUser[mySym]); //printing symbol


//Declaring a key value pair outside object

jsUser.greeting = function(){
    console.log('Hello Js users');
};

console.log(jsUser.greeting());
console.log(jsUser)

//Updating and freezing value in objects
jsUser.email = 'myemail@yahoo.com';
console.log(`Updating email: ${jsUser.email}`);

Object.freeze(jsUser);
jsUser.email = 'myemail@ybl.com';
console.log(`Updating email after freeze: ${jsUser.email}`);