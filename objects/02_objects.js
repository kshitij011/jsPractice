//Declaring object as singleton or with constructure method

const myApp = new Object();

myApp.id = '11';
myApp.name = 'Computer';
myApp.isLoggedIn = false;

console.log("A",myApp);

//nesting objects

const regularUser = {
    email: 'myemail@xyz.com',
    fullname: {
        userfullname: {
            firstname: 'Comp',
            lastname: 'Engg'
        }
    }
}
console.log("Nested objests",regularUser);
console.log("Accessing value form children ",regularUser);

//merging objects in one object
const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"a", 4:"b"};

const obj3 = {obj1, obj2};  //Objects are nested in third obj
console.log("Combined obj 1 & 2(Nested) ", obj3);

const obj4= Object.assign({}, obj1, obj2);  //empty brackets at the start specify the target where the object values will go. Here the values of 1st and 2nd obj will go to empty array first. It is also more readable
console.log("Combined obj 1 & 2(single dimensional object)\n", obj4);

const spread = {...obj1, ...obj2, ...myApp};
console.log(spread);

//Database returns the array of objects if there are multiple users. To fetch the info from objects inside array
const users = [
    {
        id: 1,
        email: 'c@gmail.com'
    },
    {
        id: 2,
        email: 'c@gmail.com'
    },
    {
        id: 3,
        email: 'c@gmail.com'
    },
    {
        id: 4,
        email: 'c@gmail.com'
    },
]

console.log("Email of first user: ",users[1].email);

//Access only keys/values of the object
console.log("Printing keys: ", Object.keys(myApp));
console.log("Printing values: ", Object.values(myApp));
console.log("Printing entries: ", Object.entries(myApp));   //returns each key value pair in seperate arrays

//Check if a value already exists
console.log(myApp.hasOwnProperty('isLoggedIn'));

const {name} = myApp;
console.log(`Name fetched from myApp Object using destructuring is ${name}`);

const {isLoggedIn: login} = myApp; //This syntax is used if we want to change the name of the key
console.log(`Login status fetched from myApp Object using destructuring is ${login}`);