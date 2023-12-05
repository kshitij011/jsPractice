const myObj = {
    name: "Computer",
    wishMsg: function(){
        console.log(`Hello ${this.name}`);
    }
}

myObj.wishMsg();
myObj.name = "myName";
myObj.wishMsg()

console.log(this);

function sample(){
    console.log(this);
}

sample();