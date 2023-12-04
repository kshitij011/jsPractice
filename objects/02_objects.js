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

const obj4= Object.assign({}, obj1, obj2);  //empty brackets at the start specify the target where the object values will go. Here the values of 1st and 2nd obj will go to empty array first
console.log("Combined obj 1 & 2(single dimensional object)\n", obj4);
