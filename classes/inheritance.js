class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    //overwrite
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourses(){
        console.log(`This new course was added by ${this.username}`)
    }
}

const comp = new Teacher("comp", "comp@teacher.com", "123");

comp.addCourses()
comp.logMe()

console.log(Teacher === User);
console.log(User === Teacher);
console.log(comp instanceof Teacher);
console.log(comp instanceof User);

console.log(Math.PI)