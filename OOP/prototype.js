function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power = 2

console.log(multiplyBy5(5))
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function CreateUser(username, score){
    this.username = username
    this.score = score
}

CreateUser.prototype.increment = function(score){
    this.score++
}

CreateUser.prototype.printMe = function(score){
    console.log(`Score is ${this.score}`)
}

const user1 = new CreateUser('Person1', 20)
const user2 = new CreateUser('Person2', 30)

user1.printMe()

