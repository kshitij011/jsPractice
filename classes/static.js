//static properties and methods. Static methods cannot be accessed by the instances of the class.
//Normal properties are methods gets bind to the class instances and static methods gets on top of the class.

//Incrementing id of each user by 1
// let id = 1;     //this is the wrong way of defining a variable outside the class, instead define indise the class by using static keyword

class User{

    static id = 1;

    constructor(name, age, income){
        this.name = name;
        this.age = age;
        this.income = income;
    }

    static sortMyArr(a, b){
        return a.age - b.age;
    }

    static sortByIncome(a, b){
        return a.income - b.income;
    }

    id = User.id++;
}

const user1  = new User("Rakesh K", 30, 5000);
const user2  = new User("Jhon Doe", 29, 10000);
const user3  = new User("Rakesh K", 20, 7000);

const users = [user1, user2, user3]

// users.sort((a, b)=>a.age - b.age)
users.sort(User.sortByIncome)

console.log(users);