//call is used to invoke a function in one object from another object.

const person1 = {
    Firstname: 'myName1',
    Lastname: 'Lastname1',
    fullname: function(city, country){
        return this.Firstname+ this.Lastname + city + country;
    }
}

console.log(`Person1: ${person1.fullname()}`);

const person2 = {
    Firstname: 'myName2',
    Lastname: 'Lastname2',
}

// console.log(`person2: ${person2.fullname()}`);
console.log(`person2: ${person1.fullname.call(person2, 'pune', 'India')}`);

//Apply
//In apply method arguments are passed using an array
console.log(`person2: ${person1.fullname.apply(person2, ['pune', 'India'])}`);

//bind
// bind method binds the funciton to our specified object which returns a result that can be stored in a variable.
const result = person1.fullname.bind(person2, 'pune', 'India')

console.log(result);
console.log(result());
