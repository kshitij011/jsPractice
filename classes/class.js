class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }

}

const comp = new User("Comp", "comp@gmail.com", "123");

console.log(comp.encryptPassword());
