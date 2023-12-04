function addTwoNumbers(num1, num2){
    let result = num1 + num2;
    return result;
};


console.log(addTwoNumbers(4, 5));

function loginUserMessage(username){    //(username = "DefaultName") we can set default value if no value is passed.can be overwritten later in the code.
    if(username === undefined){     //other syntax: (!username)
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in.`
}

console.log(loginUserMessage());